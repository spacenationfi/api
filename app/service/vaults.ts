import { between, lessThanOrEqualTo } from "@aws/dynamodb-expressions";

// constants
import { AURORA_PROVIDER } from "../constants/config/aurora.config";
import { NAV_CALCULATOR, CONTROLLER } from "../constants/contracts";
import { WHITELIST } from "../constants/whitelist";
//utils
import { intersection, cFormatter } from "../utils/array";
import { uid, getDataMapper, VaultObject } from "../model";
// services
import { ERC20Service } from "./erc20";
import { NavService } from "./nav";
import { ControllerService } from "./controller";
// hooks
const navService = new NavService(AURORA_PROVIDER, NAV_CALCULATOR);
const controllerService = new ControllerService(AURORA_PROVIDER, CONTROLLER);

export class VaultsService {
  protected async findVaultById(id: string) {
    const mapper = getDataMapper();
    try {
      for await (const item of mapper.query(
        VaultObject,
        { address: id.toLowerCase() },
        { limit: 1, scanIndexForward: false }
      )) {
        return item;
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  protected async findAllVaults() {
    const mapper = getDataMapper();
    const tokensToGet = WHITELIST.map((addr) =>
      Object.assign(
        new VaultObject(),
        {
          address: addr,
        },
        { limit: 1, scanIndexForward: false }
      )
    );

    const tokensInfo: any[] = [];

    try {
      for await (const token of mapper.batchGet(tokensToGet)) {
        tokensInfo.push(token);
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
    return tokensInfo;
  }

  protected async updateAllVaults() {
    const sets = await controllerService.getSets();
    const tokens = intersection(
      sets.map((x) => x.toLowerCase()),
      WHITELIST.map((x) => x.toLowerCase())
    );
    const mapper = getDataMapper();
    let obj = [];
    try {
      await Promise.all(
        tokens.map(async (set: string) => {
          const erc20Service = new ERC20Service(AURORA_PROVIDER, set);
          const name = await erc20Service.name();
          const symbol = await erc20Service.symbol();
          const components = await erc20Service.getComponents();
          const rawTotalSupply = await erc20Service.totalSupply();
          const rawNav = await navService.getNav(set);
          const rawMcap = rawTotalSupply.mul(rawNav);
          const totalSupply = Number(rawTotalSupply);
          const nav = Number(rawNav);
          const mcap = Number(rawMcap);
          const apr = Number(0);
          const newVault = {
            address: cFormatter(set),
            name,
            symbol,
            components,
            totalSupply,
            nav,
            mcap,
            apr,
            uid,
          };
          const result = await mapper.put(
            Object.assign(new VaultObject(), newVault)
          );
          obj.push(result);
        })
      );
      return { stage: process.env.STAGE, status: true, obj };
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

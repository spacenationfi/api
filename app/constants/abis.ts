export const navAbi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_weth",
                type: "address"
            },
            {
                internalType: "address",
                name: "_dai",
                type: "address"
            },
            {
                internalType: "address",
                name: "_uniFactory",
                type: "address"
            },
            {
                internalType: "contract IUniswapV2Router02",
                name: "_uniRouter",
                type: "address"
            },
            {
                internalType: "address",
                name: "_sushiFactory",
                type: "address"
            },
            {
                internalType: "contract IUniswapV2Router02",
                name: "_sushiRouter",
                type: "address"
            },
            {
                internalType: "contract IController",
                name: "_setController",
                type: "address"
            },
            {
                internalType: "contract IBasicIssuanceModule",
                name: "_basicIssuanceModule",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [],
        name: "DAI",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "ETH_ADDRESS",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "WETH",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "basicIssuanceModule",
        outputs: [
            {
                internalType: "contract IBasicIssuanceModule",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract ISetToken",
                name: "_setToken",
                type: "address"
            }
        ],
        name: "getEstimatedNav",
        outputs: [
            {
                internalType: "uint256",
                name: "nav",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "setController",
        outputs: [
            {
                internalType: "contract IController",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "sushiFactory",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "sushiRouter",
        outputs: [
            {
                internalType: "contract IUniswapV2Router02",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "uniFactory",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "uniRouter",
        outputs: [
            {
                internalType: "contract IUniswapV2Router02",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
]

export const controllerAbi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_feeRecipient",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_factory",
                type: "address"
            }
        ],
        name: "FactoryAdded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_factory",
                type: "address"
            }
        ],
        name: "FactoryRemoved",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_module",
                type: "address"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "_feeType",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_feePercentage",
                type: "uint256"
            }
        ],
        name: "FeeEdited",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_newFeeRecipient",
                type: "address"
            }
        ],
        name: "FeeRecipientChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_module",
                type: "address"
            }
        ],
        name: "ModuleAdded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_module",
                type: "address"
            }
        ],
        name: "ModuleRemoved",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_resource",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            }
        ],
        name: "ResourceAdded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_resource",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            }
        ],
        name: "ResourceRemoved",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_setToken",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_factory",
                type: "address"
            }
        ],
        name: "SetAdded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_setToken",
                type: "address"
            }
        ],
        name: "SetRemoved",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_factory",
                type: "address"
            }
        ],
        name: "addFactory",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_module",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_feeType",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_newFeePercentage",
                type: "uint256"
            }
        ],
        name: "addFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_module",
                type: "address"
            }
        ],
        name: "addModule",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_resource",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            }
        ],
        name: "addResource",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_setToken",
                type: "address"
            }
        ],
        name: "addSet",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_module",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_feeType",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_newFeePercentage",
                type: "uint256"
            }
        ],
        name: "editFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newFeeRecipient",
                type: "address"
            }
        ],
        name: "editFeeRecipient",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "factories",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [],
        name: "feeRecipient",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "fees",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [],
        name: "getFactories",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_moduleAddress",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_feeType",
                type: "uint256"
            }
        ],
        name: "getModuleFee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [],
        name: "getModules",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [],
        name: "getResources",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [],
        name: "getSets",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_factories",
                type: "address[]"
            },
            {
                internalType: "address[]",
                name: "_modules",
                type: "address[]"
            },
            {
                internalType: "address[]",
                name: "_resources",
                type: "address[]"
            },
            {
                internalType: "uint256[]",
                name: "_resourceIds",
                type: "uint256[]"
            }
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "isFactory",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [],
        name: "isInitialized",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "isModule",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "isResource",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "isSet",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_contractAddress",
                type: "address"
            }
        ],
        name: "isSystemContract",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "modules",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_factory",
                type: "address"
            }
        ],
        name: "removeFactory",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_module",
                type: "address"
            }
        ],
        name: "removeModule",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            }
        ],
        name: "removeResource",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_setToken",
                type: "address"
            }
        ],
        name: "removeSet",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "resourceId",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "resources",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "sets",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function",
        gas: "29000000"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
        gas: "29000000"
    }
]
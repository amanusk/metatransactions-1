/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { DailyLimitModule } from "./DailyLimitModule";

export class DailyLimitModuleFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<DailyLimitModule> {
    return super.deploy(overrides) as Promise<DailyLimitModule>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): DailyLimitModule {
    return super.attach(address) as DailyLimitModule;
  }
  connect(signer: Signer): DailyLimitModuleFactory {
    return super.connect(signer) as DailyLimitModuleFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DailyLimitModule {
    return new Contract(address, _abi, signerOrProvider) as DailyLimitModule;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "tokens",
        type: "address[]"
      },
      {
        name: "_dailyLimits",
        type: "uint256[]"
      }
    ],
    name: "setup",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "manager",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "token",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    name: "executeDailyLimit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_masterCopy",
        type: "address"
      }
    ],
    name: "changeMasterCopy",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "token",
        type: "address"
      },
      {
        name: "dailyLimit",
        type: "uint256"
      }
    ],
    name: "changeDailyLimit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "NAME",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "today",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "dailyLimits",
    outputs: [
      {
        name: "dailyLimit",
        type: "uint256"
      },
      {
        name: "spentToday",
        type: "uint256"
      },
      {
        name: "lastDay",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "masterCopy",
        type: "address"
      }
    ],
    name: "ChangedMasterCopy",
    type: "event"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610c6c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b0576000357c01000000000000000000000000000000000000000000000000000000009004806381c5e03b1161008357806381c5e03b1461025e578063a3f4df7e1461028a578063b74e452b14610307578063d7bffc9214610321578063ffa1ad7414610365576100b0565b806328814f03146100b5578063481c6a75146101de57806363bae7c3146102025780637de7edef14610238575b600080fd5b6101dc600480360360408110156100cb57600080fd5b8101906020810181356401000000008111156100e657600080fd5b8201836020820111156100f857600080fd5b8035906020019184602083028401116401000000008311171561011a57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561016a57600080fd5b82018360208201111561017c57600080fd5b8035906020019184602083028401116401000000008311171561019e57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061036d945050505050565b005b6101e66103db565b60408051600160a060020a039092168252519081900360200190f35b6101dc6004803603606081101561021857600080fd5b50600160a060020a038135811691602081013590911690604001356103ea565b6101dc6004803603602081101561024e57600080fd5b5035600160a060020a03166108dd565b6101dc6004803603604081101561027457600080fd5b50600160a060020a0381351690602001356109d4565b610292610a3c565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102cc5781810151838201526020016102b4565b50505050905090810190601f1680156102f95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61030f610a73565b60408051918252519081900360200190f35b6103476004803603602081101561033757600080fd5b5035600160a060020a0316610a80565b60408051938452602084019290925282820152519081900360600190f35b610292610aa0565b610375610ad7565b60005b82518110156103d657818181518110151561038f57fe5b906020019060200201516002600085848151811015156103ab57fe5b6020908102909101810151600160a060020a0316825281019190915260400160002055600101610378565b505050565b600154600160a060020a031681565b600154604080517f2f54bf6e0000000000000000000000000000000000000000000000000000000081523360048201529051600160a060020a0390921691632f54bf6e91602480820192602092909190829003018186803b15801561044e57600080fd5b505afa158015610462573d6000803e3d6000fd5b505050506040513d602081101561047857600080fd5b505115156104ba5760405160e560020a62461bcd028152600401808060200182810382526025815260200180610bf66025913960400191505060405180910390fd5b600160a060020a038216151561051a576040805160e560020a62461bcd02815260206004820152601b60248201527f496e76616c696420746f20616464726573732070726f76696465640000000000604482015290519081900360640190fd5b60008111610572576040805160e560020a62461bcd02815260206004820152601760248201527f496e76616c696420616d6f756e742070726f7669646564000000000000000000604482015290519081900360640190fd5b61057c8382610b59565b15156105d2576040805160e560020a62461bcd02815260206004820152601c60248201527f4461696c79206c696d697420686173206265656e207265616368656400000000604482015290519081900360640190fd5b600160a060020a0383166000818152600260205260409020600101805483019055151561070657600154604080517f468721a7000000000000000000000000000000000000000000000000000000008152600160a060020a038581166004830152602482018590526000606483018190526080604484015260848301819052925193169263468721a79260c480840193602093929083900390910190829087803b15801561067f57600080fd5b505af1158015610693573d6000803e3d6000fd5b505050506040513d60208110156106a957600080fd5b50511515610701576040805160e560020a62461bcd02815260206004820181905260248201527f436f756c64206e6f742065786563757465206574686572207472616e73666572604482015290519081900360640190fd5b6103d6565b60408051600160a060020a038481166024808401919091526044808401869052845180850382018152606494850186526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017815260015496517f468721a70000000000000000000000000000000000000000000000000000000081528a8616600482019081526000958201869052968101859052608093810193845282516084820152825192979095169563468721a7958b959489948694919260a4019190808383885b838110156108065781810151838201526020016107ee565b50505050905090810190601f1680156108335780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561085557600080fd5b505af1158015610869573d6000803e3d6000fd5b505050506040513d602081101561087f57600080fd5b505115156108d7576040805160e560020a62461bcd02815260206004820181905260248201527f436f756c64206e6f74206578656375746520746f6b656e207472616e73666572604482015290519081900360640190fd5b50505050565b600154600160a060020a031633146109295760405160e560020a62461bcd028152600401808060200182810382526026815260200180610c1b6026913960400191505060405180910390fd5b600160a060020a03811615156109735760405160e560020a62461bcd028152600401808060200182810382526024815260200180610bd26024913960400191505060405180910390fd5b60008054600160a060020a03831673ffffffffffffffffffffffffffffffffffffffff19909116811790915560408051918252517f75e41bc35ff1bf14d81d1d2f649c0084a0f974f9289c803ec9898eeec4c8d0b89181900360200190a150565b600154600160a060020a03163314610a205760405160e560020a62461bcd028152600401808060200182810382526026815260200180610c1b6026913960400191505060405180910390fd5b600160a060020a03909116600090815260026020526040902055565b60408051808201909152601281527f4461696c79204c696d6974204d6f64756c650000000000000000000000000000602082015281565b6201518042908106900390565b600260208190526000918252604090912080546001820154919092015483565b60408051808201909152600581527f302e312e30000000000000000000000000000000000000000000000000000000602082015281565b600154600160a060020a031615610b38576040805160e560020a62461bcd02815260206004820152601c60248201527f4d616e616765722068617320616c7265616479206265656e2073657400000000604482015290519081900360640190fd5b6001805473ffffffffffffffffffffffffffffffffffffffff191633179055565b600160a060020a0382166000908152600260208190526040822090810154610b7f610a73565b1115610b9a57610b8d610a73565b6002820155600060018201555b80546001820154840111801590610bb657506001810154838101115b15610bc5576001915050610bcb565b60009150505b9291505056fe496e76616c6964206d617374657220636f707920616464726573732070726f76696465644d6574686f642063616e206f6e6c792062652063616c6c656420627920616e206f776e65724d6574686f642063616e206f6e6c792062652063616c6c65642066726f6d206d616e61676572a165627a7a72305820fcf16046b0556fd9eecbec979417236343c4323250be2002f6a1076fa960153a0029";

/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { OwnerManager } from "./OwnerManager";

export class OwnerManagerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<OwnerManager> {
    return super.deploy(overrides) as Promise<OwnerManager>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): OwnerManager {
    return super.attach(address) as OwnerManager;
  }
  connect(signer: Signer): OwnerManagerFactory {
    return super.connect(signer) as OwnerManagerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnerManager {
    return new Contract(address, _abi, signerOrProvider) as OwnerManager;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "_threshold",
        type: "uint256"
      }
    ],
    name: "addOwnerWithThreshold",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "isOwner",
    outputs: [
      {
        name: "",
        type: "bool"
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
        name: "_threshold",
        type: "uint256"
      }
    ],
    name: "changeThreshold",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getOwners",
    outputs: [
      {
        name: "",
        type: "address[]"
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
        name: "prevOwner",
        type: "address"
      },
      {
        name: "oldOwner",
        type: "address"
      },
      {
        name: "newOwner",
        type: "address"
      }
    ],
    name: "swapOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getThreshold",
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
    constant: false,
    inputs: [
      {
        name: "prevOwner",
        type: "address"
      },
      {
        name: "owner",
        type: "address"
      },
      {
        name: "_threshold",
        type: "uint256"
      }
    ],
    name: "removeOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "owner",
        type: "address"
      }
    ],
    name: "AddedOwner",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "owner",
        type: "address"
      }
    ],
    name: "RemovedOwner",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "threshold",
        type: "uint256"
      }
    ],
    name: "ChangedThreshold",
    type: "event"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ba8806100206000396000f3fe608060405234801561001057600080fd5b506004361061009a576000357c010000000000000000000000000000000000000000000000000000000090048063a0e67e2b11610078578063a0e67e2b14610124578063e318b52b1461017c578063e75235b8146101b4578063f8dc5dd9146101ce5761009a565b80630d582f131461009f5780632f54bf6e146100cd578063694e80c314610107575b600080fd5b6100cb600480360360408110156100b557600080fd5b50600160a060020a038135169060200135610204565b005b6100f3600480360360208110156100e357600080fd5b5035600160a060020a03166103d9565b604080519115158252519081900360200190f35b6100cb6004803603602081101561011d57600080fd5b5035610414565b61012c610517565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610168578181015183820152602001610150565b505050509050019250505060405180910390f35b6100cb6004803603606081101561019257600080fd5b50600160a060020a0381358116916020810135821691604090910135166105e3565b6101bc610895565b60408051918252519081900360200190f35b6100cb600480360360608110156101e457600080fd5b50600160a060020a0381358116916020810135909116906040013561089b565b3330146102455760405160e560020a62461bcd02815260040180806020018281038252602c815260200180610b51602c913960400191505060405180910390fd5b600160a060020a038216158015906102675750600160a060020a038216600114155b15156102ab576040805160e560020a62461bcd02815260206004820152601e6024820152600080516020610a8f833981519152604482015290519081900360640190fd5b600160a060020a03828116600090815260208190526040902054161561031b576040805160e560020a62461bcd02815260206004820152601b60248201527f4164647265737320697320616c726561647920616e206f776e65720000000000604482015290519081900360640190fd5b600060208181527fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d8054600160a060020a03868116808652604080872080549390941673ffffffffffffffffffffffffffffffffffffffff19938416179093556001958690528354909116811790925583548401909355825190815291517f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea269281900390910190a160025481146103d5576103d581610414565b5050565b6000600160a060020a03821660011480159061040e5750600160a060020a038281166000908152602081905260409020541615155b92915050565b3330146104555760405160e560020a62461bcd02815260040180806020018281038252602c815260200180610b51602c913960400191505060405180910390fd5b6001548111156104995760405160e560020a62461bcd028152600401808060200182810382526023815260200180610aaf6023913960400191505060405180910390fd5b60018110156104dc5760405160e560020a62461bcd028152600401808060200182810382526024815260200180610b2d6024913960400191505060405180910390fd5b60028190556040805182815290517f610f7ff2b304ae8903c3de74c60c6ab1f7d6226b3f52c5161905bb5ad4039c939181900360200190a150565b606080600154604051908082528060200260200182016040528015610546578160200160208202803883390190505b506001600090815260208190527fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d5491925090600160a060020a03165b600160a060020a0381166001146105db578083838151811015156105a357fe5b600160a060020a0392831660209182029092018101919091529181166000908152918290526040909120546001929092019116610583565b509091505090565b3330146106245760405160e560020a62461bcd02815260040180806020018281038252602c815260200180610b51602c913960400191505060405180910390fd5b600160a060020a038116158015906106465750600160a060020a038116600114155b151561068a576040805160e560020a62461bcd02815260206004820152601e6024820152600080516020610a8f833981519152604482015290519081900360640190fd5b600160a060020a0381811660009081526020819052604090205416156106fa576040805160e560020a62461bcd02815260206004820152601b60248201527f4164647265737320697320616c726561647920616e206f776e65720000000000604482015290519081900360640190fd5b600160a060020a0382161580159061071c5750600160a060020a038216600114155b1515610760576040805160e560020a62461bcd02815260206004820152601e6024820152600080516020610a8f833981519152604482015290519081900360640190fd5b600160a060020a038381166000908152602081905260409020548116908316146107be5760405160e560020a62461bcd028152600401808060200182810382526026815260200180610b076026913960400191505060405180910390fd5b600160a060020a038281166000818152602081815260408083208054878716808652838620805492891673ffffffffffffffffffffffffffffffffffffffff19938416179055968a16855282852080548216909717909655928490528254909416909155825191825291517ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf929181900390910190a160408051600160a060020a038316815290517f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea269181900360200190a1505050565b60025490565b3330146108dc5760405160e560020a62461bcd02815260040180806020018281038252602c815260200180610b51602c913960400191505060405180910390fd5b600154600019018111156109245760405160e560020a62461bcd028152600401808060200182810382526035815260200180610ad26035913960400191505060405180910390fd5b600160a060020a038216158015906109465750600160a060020a038216600114155b151561098a576040805160e560020a62461bcd02815260206004820152601e6024820152600080516020610a8f833981519152604482015290519081900360640190fd5b600160a060020a038381166000908152602081905260409020548116908316146109e85760405160e560020a62461bcd028152600401808060200182810382526026815260200180610b076026913960400191505060405180910390fd5b600160a060020a038281166000818152602081815260408083208054898716855282852080549190971673ffffffffffffffffffffffffffffffffffffffff199182161790965592849052825490941690915560018054600019019055825191825291517ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf929181900390910190a16002548114610a8957610a8981610414565b50505056fe496e76616c6964206f776e657220616464726573732070726f766964656400005468726573686f6c642063616e6e6f7420657863656564206f776e657220636f756e744e6577206f776e657220636f756e74206e6565647320746f206265206c6172676572207468616e206e6577207468726573686f6c64496e76616c696420707265764f776e65722c206f776e657220706169722070726f76696465645468726573686f6c64206e6565647320746f2062652067726561746572207468616e20304d6574686f642063616e206f6e6c792062652063616c6c65642066726f6d207468697320636f6e7472616374a165627a7a72305820b042e4e49c7d3a9866f23c0fe221d0c207998aad12f72c1be764892e9a5f86ea0029";

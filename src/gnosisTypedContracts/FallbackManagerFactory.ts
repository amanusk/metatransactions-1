/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { FallbackManager } from "./FallbackManager";

export class FallbackManagerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<FallbackManager> {
    return super.deploy(overrides) as Promise<FallbackManager>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): FallbackManager {
    return super.attach(address) as FallbackManager;
  }
  connect(signer: Signer): FallbackManagerFactory {
    return super.connect(signer) as FallbackManagerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FallbackManager {
    return new Contract(address, _abi, signerOrProvider) as FallbackManager;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "handler",
        type: "address"
      }
    ],
    name: "setFallbackHandler",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101b9806100206000396000f3fe60806040526004361061001e5760003560e01c8063f08a03231461009e575b600034118061002b575036155b156100355761009c565b7f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d5805473ffffffffffffffffffffffffffffffffffffffff81161561009957366000803760008036600080855af13d6000803e801515610094573d6000fd5b3d6000f35b50505b005b3480156100aa57600080fd5b5061009c600480360360208110156100c157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16333014610131576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610162602c913960400191505060405180910390fd5b61013a8161013d565b50565b7f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d55556fe4d6574686f642063616e206f6e6c792062652063616c6c65642066726f6d207468697320636f6e7472616374a165627a7a723058204a769178b869c91b8792347e3e74f5677076b9db89bb388ab3e3e7faf28720d20029";

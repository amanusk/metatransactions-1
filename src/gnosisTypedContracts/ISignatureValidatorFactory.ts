/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { ISignatureValidator } from "./ISignatureValidator";

export class ISignatureValidatorFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISignatureValidator {
    return new Contract(address, _abi, signerOrProvider) as ISignatureValidator;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_data",
        type: "bytes"
      },
      {
        name: "_signature",
        type: "bytes"
      }
    ],
    name: "isValidSignature",
    outputs: [
      {
        name: "",
        type: "bytes4"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

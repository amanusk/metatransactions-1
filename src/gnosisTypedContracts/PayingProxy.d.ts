/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface PayingProxyInterface extends Interface {
  functions: {};

  events: {};
}

export class PayingProxy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): PayingProxy;
  attach(addressOrName: string): PayingProxy;
  deployed(): Promise<PayingProxy>;

  on(event: EventFilter | string, listener: Listener): PayingProxy;
  once(event: EventFilter | string, listener: Listener): PayingProxy;
  addListener(eventName: EventFilter | string, listener: Listener): PayingProxy;
  removeAllListeners(eventName: EventFilter | string): PayingProxy;
  removeListener(eventName: any, listener: Listener): PayingProxy;

  interface: PayingProxyInterface;

  functions: {};

  filters: {};

  estimate: {};
}

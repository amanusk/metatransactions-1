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

interface CreateAndAddModulesInterface extends Interface {
  functions: {
    createAndAddModules: TypedFunctionDescription<{
      encode([proxyFactory, data]: [string, Arrayish]): string;
    }>;

    enableModule: TypedFunctionDescription<{
      encode([module]: [string]): string;
    }>;
  };

  events: {};
}

export class CreateAndAddModules extends Contract {
  connect(signerOrProvider: Signer | Provider | string): CreateAndAddModules;
  attach(addressOrName: string): CreateAndAddModules;
  deployed(): Promise<CreateAndAddModules>;

  on(event: EventFilter | string, listener: Listener): CreateAndAddModules;
  once(event: EventFilter | string, listener: Listener): CreateAndAddModules;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): CreateAndAddModules;
  removeAllListeners(eventName: EventFilter | string): CreateAndAddModules;
  removeListener(eventName: any, listener: Listener): CreateAndAddModules;

  interface: CreateAndAddModulesInterface;

  functions: {
    createAndAddModules(
      proxyFactory: string,
      data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    enableModule(
      module: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  createAndAddModules(
    proxyFactory: string,
    data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  enableModule(
    module: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    createAndAddModules(
      proxyFactory: string,
      data: Arrayish
    ): Promise<BigNumber>;

    enableModule(module: string): Promise<BigNumber>;
  };
}

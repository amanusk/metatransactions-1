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

interface MockContractInterface extends Interface {
  functions: {
    invocationCount: TypedFunctionDescription<{ encode([]: []): string }>;

    DEFAULT_FALLBACK_VALUE: TypedFunctionDescription<{
      encode([]: []): string;
    }>;

    givenCalldataRunOutOfGas: TypedFunctionDescription<{
      encode([call]: [Arrayish]): string;
    }>;

    MOCKS_LIST_END_HASH: TypedFunctionDescription<{ encode([]: []): string }>;

    givenAnyReturnBool: TypedFunctionDescription<{
      encode([response]: [boolean]): string;
    }>;

    givenAnyRunOutOfGas: TypedFunctionDescription<{ encode([]: []): string }>;

    invocationCountForMethod: TypedFunctionDescription<{
      encode([call]: [Arrayish]): string;
    }>;

    invocationCountForCalldata: TypedFunctionDescription<{
      encode([call]: [Arrayish]): string;
    }>;

    updateInvocationCount: TypedFunctionDescription<{
      encode([methodId, originalMsgData]: [Arrayish, Arrayish]): string;
    }>;

    givenCalldataReturnBool: TypedFunctionDescription<{
      encode([call, response]: [Arrayish, boolean]): string;
    }>;

    givenCalldataReturn: TypedFunctionDescription<{
      encode([call, response]: [Arrayish, Arrayish]): string;
    }>;

    MOCKS_LIST_START: TypedFunctionDescription<{ encode([]: []): string }>;

    givenAnyReturnAddress: TypedFunctionDescription<{
      encode([response]: [string]): string;
    }>;

    givenMethodRunOutOfGas: TypedFunctionDescription<{
      encode([call]: [Arrayish]): string;
    }>;

    givenMethodReturnBool: TypedFunctionDescription<{
      encode([call, response]: [Arrayish, boolean]): string;
    }>;

    MOCKS_LIST_END: TypedFunctionDescription<{ encode([]: []): string }>;

    givenAnyRevertWithMessage: TypedFunctionDescription<{
      encode([message]: [string]): string;
    }>;

    givenMethodRevertWithMessage: TypedFunctionDescription<{
      encode([call, message]: [Arrayish, string]): string;
    }>;

    givenCalldataRevertWithMessage: TypedFunctionDescription<{
      encode([call, message]: [Arrayish, string]): string;
    }>;

    givenMethodRevert: TypedFunctionDescription<{
      encode([call]: [Arrayish]): string;
    }>;

    givenAnyReturnUint: TypedFunctionDescription<{
      encode([response]: [BigNumberish]): string;
    }>;

    givenCalldataReturnAddress: TypedFunctionDescription<{
      encode([call, response]: [Arrayish, string]): string;
    }>;

    givenMethodReturn: TypedFunctionDescription<{
      encode([call, response]: [Arrayish, Arrayish]): string;
    }>;

    givenMethodReturnAddress: TypedFunctionDescription<{
      encode([call, response]: [Arrayish, string]): string;
    }>;

    givenAnyReturn: TypedFunctionDescription<{
      encode([response]: [Arrayish]): string;
    }>;

    givenCalldataReturnUint: TypedFunctionDescription<{
      encode([call, response]: [Arrayish, BigNumberish]): string;
    }>;

    reset: TypedFunctionDescription<{ encode([]: []): string }>;

    givenAnyRevert: TypedFunctionDescription<{ encode([]: []): string }>;

    givenCalldataRevert: TypedFunctionDescription<{
      encode([call]: [Arrayish]): string;
    }>;

    SENTINEL_ANY_MOCKS: TypedFunctionDescription<{ encode([]: []): string }>;

    givenMethodReturnUint: TypedFunctionDescription<{
      encode([call, response]: [Arrayish, BigNumberish]): string;
    }>;
  };

  events: {};
}

export class MockContract extends Contract {
  connect(signerOrProvider: Signer | Provider | string): MockContract;
  attach(addressOrName: string): MockContract;
  deployed(): Promise<MockContract>;

  on(event: EventFilter | string, listener: Listener): MockContract;
  once(event: EventFilter | string, listener: Listener): MockContract;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): MockContract;
  removeAllListeners(eventName: EventFilter | string): MockContract;
  removeListener(eventName: any, listener: Listener): MockContract;

  interface: MockContractInterface;

  functions: {
    invocationCount(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    DEFAULT_FALLBACK_VALUE(): Promise<string>;

    givenCalldataRunOutOfGas(
      call: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    MOCKS_LIST_END_HASH(): Promise<string>;

    givenAnyReturnBool(
      response: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    givenAnyRunOutOfGas(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    invocationCountForMethod(
      call: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    invocationCountForCalldata(
      call: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    updateInvocationCount(
      methodId: Arrayish,
      originalMsgData: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    givenCalldataReturnBool(
      call: Arrayish,
      response: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    givenCalldataReturn(
      call: Arrayish,
      response: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    MOCKS_LIST_START(): Promise<string>;

    givenAnyReturnAddress(
      response: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    givenMethodRunOutOfGas(
      call: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    givenMethodReturnBool(
      call: Arrayish,
      response: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    MOCKS_LIST_END(): Promise<string>;

    givenAnyRevertWithMessage(
      message: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    givenMethodRevertWithMessage(
      call: Arrayish,
      message: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    givenCalldataRevertWithMessage(
      call: Arrayish,
      message: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    givenMethodRevert(
      call: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    givenAnyReturnUint(
      response: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    givenCalldataReturnAddress(
      call: Arrayish,
      response: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    givenMethodReturn(
      call: Arrayish,
      response: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    givenMethodReturnAddress(
      call: Arrayish,
      response: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    givenAnyReturn(
      response: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    givenCalldataReturnUint(
      call: Arrayish,
      response: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    reset(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    givenAnyRevert(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    givenCalldataRevert(
      call: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    SENTINEL_ANY_MOCKS(): Promise<string>;

    givenMethodReturnUint(
      call: Arrayish,
      response: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  invocationCount(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  DEFAULT_FALLBACK_VALUE(): Promise<string>;

  givenCalldataRunOutOfGas(
    call: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  MOCKS_LIST_END_HASH(): Promise<string>;

  givenAnyReturnBool(
    response: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  givenAnyRunOutOfGas(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  invocationCountForMethod(
    call: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  invocationCountForCalldata(
    call: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  updateInvocationCount(
    methodId: Arrayish,
    originalMsgData: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  givenCalldataReturnBool(
    call: Arrayish,
    response: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  givenCalldataReturn(
    call: Arrayish,
    response: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  MOCKS_LIST_START(): Promise<string>;

  givenAnyReturnAddress(
    response: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  givenMethodRunOutOfGas(
    call: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  givenMethodReturnBool(
    call: Arrayish,
    response: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  MOCKS_LIST_END(): Promise<string>;

  givenAnyRevertWithMessage(
    message: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  givenMethodRevertWithMessage(
    call: Arrayish,
    message: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  givenCalldataRevertWithMessage(
    call: Arrayish,
    message: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  givenMethodRevert(
    call: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  givenAnyReturnUint(
    response: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  givenCalldataReturnAddress(
    call: Arrayish,
    response: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  givenMethodReturn(
    call: Arrayish,
    response: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  givenMethodReturnAddress(
    call: Arrayish,
    response: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  givenAnyReturn(
    response: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  givenCalldataReturnUint(
    call: Arrayish,
    response: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  reset(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  givenAnyRevert(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  givenCalldataRevert(
    call: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  SENTINEL_ANY_MOCKS(): Promise<string>;

  givenMethodReturnUint(
    call: Arrayish,
    response: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    invocationCount(): Promise<BigNumber>;

    DEFAULT_FALLBACK_VALUE(): Promise<BigNumber>;

    givenCalldataRunOutOfGas(call: Arrayish): Promise<BigNumber>;

    MOCKS_LIST_END_HASH(): Promise<BigNumber>;

    givenAnyReturnBool(response: boolean): Promise<BigNumber>;

    givenAnyRunOutOfGas(): Promise<BigNumber>;

    invocationCountForMethod(call: Arrayish): Promise<BigNumber>;

    invocationCountForCalldata(call: Arrayish): Promise<BigNumber>;

    updateInvocationCount(
      methodId: Arrayish,
      originalMsgData: Arrayish
    ): Promise<BigNumber>;

    givenCalldataReturnBool(
      call: Arrayish,
      response: boolean
    ): Promise<BigNumber>;

    givenCalldataReturn(call: Arrayish, response: Arrayish): Promise<BigNumber>;

    MOCKS_LIST_START(): Promise<BigNumber>;

    givenAnyReturnAddress(response: string): Promise<BigNumber>;

    givenMethodRunOutOfGas(call: Arrayish): Promise<BigNumber>;

    givenMethodReturnBool(
      call: Arrayish,
      response: boolean
    ): Promise<BigNumber>;

    MOCKS_LIST_END(): Promise<BigNumber>;

    givenAnyRevertWithMessage(message: string): Promise<BigNumber>;

    givenMethodRevertWithMessage(
      call: Arrayish,
      message: string
    ): Promise<BigNumber>;

    givenCalldataRevertWithMessage(
      call: Arrayish,
      message: string
    ): Promise<BigNumber>;

    givenMethodRevert(call: Arrayish): Promise<BigNumber>;

    givenAnyReturnUint(response: BigNumberish): Promise<BigNumber>;

    givenCalldataReturnAddress(
      call: Arrayish,
      response: string
    ): Promise<BigNumber>;

    givenMethodReturn(call: Arrayish, response: Arrayish): Promise<BigNumber>;

    givenMethodReturnAddress(
      call: Arrayish,
      response: string
    ): Promise<BigNumber>;

    givenAnyReturn(response: Arrayish): Promise<BigNumber>;

    givenCalldataReturnUint(
      call: Arrayish,
      response: BigNumberish
    ): Promise<BigNumber>;

    reset(): Promise<BigNumber>;

    givenAnyRevert(): Promise<BigNumber>;

    givenCalldataRevert(call: Arrayish): Promise<BigNumber>;

    SENTINEL_ANY_MOCKS(): Promise<BigNumber>;

    givenMethodReturnUint(
      call: Arrayish,
      response: BigNumberish
    ): Promise<BigNumber>;
  };
}

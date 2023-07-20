// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipRenounced extends ethereum.Event {
  get params(): OwnershipRenounced__Params {
    return new OwnershipRenounced__Params(this);
  }
}

export class OwnershipRenounced__Params {
  _event: OwnershipRenounced;

  constructor(event: OwnershipRenounced) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class LinearStarRelease__batchesResult {
  value0: BigInt;
  value1: BigInt;
  value2: i32;
  value3: i32;
  value4: i32;
  value5: Address;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: i32,
    value3: i32,
    value4: i32,
    value5: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set(
      "value2",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value2))
    );
    map.set(
      "value3",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value3))
    );
    map.set(
      "value4",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value4))
    );
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    return map;
  }

  getWindup(): BigInt {
    return this.value0;
  }

  getRateUnit(): BigInt {
    return this.value1;
  }

  getWithdrawn(): i32 {
    return this.value2;
  }

  getRate(): i32 {
    return this.value3;
  }

  getAmount(): i32 {
    return this.value4;
  }

  getApprovedTransferTo(): Address {
    return this.value5;
  }
}

export class LinearStarRelease extends ethereum.SmartContract {
  static bind(address: Address): LinearStarRelease {
    return new LinearStarRelease("LinearStarRelease", address);
  }

  getRemainingStars(_participant: Address): Array<i32> {
    let result = super.call(
      "getRemainingStars",
      "getRemainingStars(address):(uint16[])",
      [ethereum.Value.fromAddress(_participant)]
    );

    return result[0].toI32Array();
  }

  try_getRemainingStars(
    _participant: Address
  ): ethereum.CallResult<Array<i32>> {
    let result = super.tryCall(
      "getRemainingStars",
      "getRemainingStars(address):(uint16[])",
      [ethereum.Value.fromAddress(_participant)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32Array());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  verifyBalance(_participant: Address): boolean {
    let result = super.call("verifyBalance", "verifyBalance(address):(bool)", [
      ethereum.Value.fromAddress(_participant)
    ]);

    return result[0].toBoolean();
  }

  try_verifyBalance(_participant: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "verifyBalance",
      "verifyBalance(address):(bool)",
      [ethereum.Value.fromAddress(_participant)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  start(): BigInt {
    let result = super.call("start", "start():(uint256)", []);

    return result[0].toBigInt();
  }

  try_start(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("start", "start():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  azimuth(): Address {
    let result = super.call("azimuth", "azimuth():(address)", []);

    return result[0].toAddress();
  }

  try_azimuth(): ethereum.CallResult<Address> {
    let result = super.tryCall("azimuth", "azimuth():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  batches(param0: Address): LinearStarRelease__batchesResult {
    let result = super.call(
      "batches",
      "batches(address):(uint256,uint256,uint16,uint16,uint16,address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new LinearStarRelease__batchesResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toI32(),
      result[3].toI32(),
      result[4].toI32(),
      result[5].toAddress()
    );
  }

  try_batches(
    param0: Address
  ): ethereum.CallResult<LinearStarRelease__batchesResult> {
    let result = super.tryCall(
      "batches",
      "batches(address):(uint256,uint256,uint16,uint16,uint16,address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new LinearStarRelease__batchesResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toI32(),
        value[3].toI32(),
        value[4].toI32(),
        value[5].toAddress()
      )
    );
  }

  withdrawLimit(_participant: Address): i32 {
    let result = super.call(
      "withdrawLimit",
      "withdrawLimit(address):(uint16)",
      [ethereum.Value.fromAddress(_participant)]
    );

    return result[0].toI32();
  }

  try_withdrawLimit(_participant: Address): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "withdrawLimit",
      "withdrawLimit(address):(uint16)",
      [ethereum.Value.fromAddress(_participant)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }
}

export class StartReleasingCall extends ethereum.Call {
  get inputs(): StartReleasingCall__Inputs {
    return new StartReleasingCall__Inputs(this);
  }

  get outputs(): StartReleasingCall__Outputs {
    return new StartReleasingCall__Outputs(this);
  }
}

export class StartReleasingCall__Inputs {
  _call: StartReleasingCall;

  constructor(call: StartReleasingCall) {
    this._call = call;
  }
}

export class StartReleasingCall__Outputs {
  _call: StartReleasingCall;

  constructor(call: StartReleasingCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class Withdraw1Call extends ethereum.Call {
  get inputs(): Withdraw1Call__Inputs {
    return new Withdraw1Call__Inputs(this);
  }

  get outputs(): Withdraw1Call__Outputs {
    return new Withdraw1Call__Outputs(this);
  }
}

export class Withdraw1Call__Inputs {
  _call: Withdraw1Call;

  constructor(call: Withdraw1Call) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class Withdraw1Call__Outputs {
  _call: Withdraw1Call;

  constructor(call: Withdraw1Call) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawOverdueCall extends ethereum.Call {
  get inputs(): WithdrawOverdueCall__Inputs {
    return new WithdrawOverdueCall__Inputs(this);
  }

  get outputs(): WithdrawOverdueCall__Outputs {
    return new WithdrawOverdueCall__Outputs(this);
  }
}

export class WithdrawOverdueCall__Inputs {
  _call: WithdrawOverdueCall;

  constructor(call: WithdrawOverdueCall) {
    this._call = call;
  }

  get _participant(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class WithdrawOverdueCall__Outputs {
  _call: WithdrawOverdueCall;

  constructor(call: WithdrawOverdueCall) {
    this._call = call;
  }
}

export class TransferBatchCall extends ethereum.Call {
  get inputs(): TransferBatchCall__Inputs {
    return new TransferBatchCall__Inputs(this);
  }

  get outputs(): TransferBatchCall__Outputs {
    return new TransferBatchCall__Outputs(this);
  }
}

export class TransferBatchCall__Inputs {
  _call: TransferBatchCall;

  constructor(call: TransferBatchCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferBatchCall__Outputs {
  _call: TransferBatchCall;

  constructor(call: TransferBatchCall) {
    this._call = call;
  }
}

export class RegisterCall extends ethereum.Call {
  get inputs(): RegisterCall__Inputs {
    return new RegisterCall__Inputs(this);
  }

  get outputs(): RegisterCall__Outputs {
    return new RegisterCall__Outputs(this);
  }
}

export class RegisterCall__Inputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }

  get _participant(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _windup(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _amount(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get _rate(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get _rateUnit(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class RegisterCall__Outputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }
}

export class ApproveBatchTransferCall extends ethereum.Call {
  get inputs(): ApproveBatchTransferCall__Inputs {
    return new ApproveBatchTransferCall__Inputs(this);
  }

  get outputs(): ApproveBatchTransferCall__Outputs {
    return new ApproveBatchTransferCall__Outputs(this);
  }
}

export class ApproveBatchTransferCall__Inputs {
  _call: ApproveBatchTransferCall;

  constructor(call: ApproveBatchTransferCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ApproveBatchTransferCall__Outputs {
  _call: ApproveBatchTransferCall;

  constructor(call: ApproveBatchTransferCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get _participant(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _star(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get _newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _azimuth(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

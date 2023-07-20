import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { Sent } from "../generated/DelegatedSending/DelegatedSending"

export function createSentEvent(
  prefix: i32,
  fromPool: BigInt,
  by: BigInt,
  point: BigInt,
  to: Address
): Sent {
  let sentEvent = changetype<Sent>(newMockEvent())

  sentEvent.parameters = new Array()

  sentEvent.parameters.push(
    new ethereum.EventParam(
      "prefix",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(prefix))
    )
  )
  sentEvent.parameters.push(
    new ethereum.EventParam(
      "fromPool",
      ethereum.Value.fromUnsignedBigInt(fromPool)
    )
  )
  sentEvent.parameters.push(
    new ethereum.EventParam("by", ethereum.Value.fromUnsignedBigInt(by))
  )
  sentEvent.parameters.push(
    new ethereum.EventParam("point", ethereum.Value.fromUnsignedBigInt(point))
  )
  sentEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return sentEvent
}

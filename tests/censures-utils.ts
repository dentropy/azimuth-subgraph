import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { Censured, Forgiven } from "../generated/Censures/Censures"

export function createCensuredEvent(by: i32, who: BigInt): Censured {
  let censuredEvent = changetype<Censured>(newMockEvent())

  censuredEvent.parameters = new Array()

  censuredEvent.parameters.push(
    new ethereum.EventParam(
      "by",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(by))
    )
  )
  censuredEvent.parameters.push(
    new ethereum.EventParam("who", ethereum.Value.fromUnsignedBigInt(who))
  )

  return censuredEvent
}

export function createForgivenEvent(by: i32, who: BigInt): Forgiven {
  let forgivenEvent = changetype<Forgiven>(newMockEvent())

  forgivenEvent.parameters = new Array()

  forgivenEvent.parameters.push(
    new ethereum.EventParam(
      "by",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(by))
    )
  )
  forgivenEvent.parameters.push(
    new ethereum.EventParam("who", ethereum.Value.fromUnsignedBigInt(who))
  )

  return forgivenEvent
}

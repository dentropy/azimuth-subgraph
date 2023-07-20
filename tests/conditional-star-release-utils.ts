import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ConditionCompleted,
  Forfeit,
  OwnershipRenounced,
  OwnershipTransferred
} from "../generated/ConditionalStarRelease/ConditionalStarRelease"

export function createConditionCompletedEvent(
  condition: i32,
  when: BigInt
): ConditionCompleted {
  let conditionCompletedEvent = changetype<ConditionCompleted>(newMockEvent())

  conditionCompletedEvent.parameters = new Array()

  conditionCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "condition",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(condition))
    )
  )
  conditionCompletedEvent.parameters.push(
    new ethereum.EventParam("when", ethereum.Value.fromUnsignedBigInt(when))
  )

  return conditionCompletedEvent
}

export function createForfeitEvent(
  who: Address,
  batch: i32,
  stars: i32
): Forfeit {
  let forfeitEvent = changetype<Forfeit>(newMockEvent())

  forfeitEvent.parameters = new Array()

  forfeitEvent.parameters.push(
    new ethereum.EventParam("who", ethereum.Value.fromAddress(who))
  )
  forfeitEvent.parameters.push(
    new ethereum.EventParam(
      "batch",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(batch))
    )
  )
  forfeitEvent.parameters.push(
    new ethereum.EventParam(
      "stars",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(stars))
    )
  )

  return forfeitEvent
}

export function createOwnershipRenouncedEvent(
  previousOwner: Address
): OwnershipRenounced {
  let ownershipRenouncedEvent = changetype<OwnershipRenounced>(newMockEvent())

  ownershipRenouncedEvent.parameters = new Array()

  ownershipRenouncedEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )

  return ownershipRenouncedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

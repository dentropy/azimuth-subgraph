import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { ClaimAdded, ClaimRemoved } from "../generated/Claims/Claims"

export function createClaimAddedEvent(
  by: BigInt,
  _protocol: string,
  _claim: string,
  _dossier: Bytes
): ClaimAdded {
  let claimAddedEvent = changetype<ClaimAdded>(newMockEvent())

  claimAddedEvent.parameters = new Array()

  claimAddedEvent.parameters.push(
    new ethereum.EventParam("by", ethereum.Value.fromUnsignedBigInt(by))
  )
  claimAddedEvent.parameters.push(
    new ethereum.EventParam("_protocol", ethereum.Value.fromString(_protocol))
  )
  claimAddedEvent.parameters.push(
    new ethereum.EventParam("_claim", ethereum.Value.fromString(_claim))
  )
  claimAddedEvent.parameters.push(
    new ethereum.EventParam("_dossier", ethereum.Value.fromBytes(_dossier))
  )

  return claimAddedEvent
}

export function createClaimRemovedEvent(
  by: BigInt,
  _protocol: string,
  _claim: string
): ClaimRemoved {
  let claimRemovedEvent = changetype<ClaimRemoved>(newMockEvent())

  claimRemovedEvent.parameters = new Array()

  claimRemovedEvent.parameters.push(
    new ethereum.EventParam("by", ethereum.Value.fromUnsignedBigInt(by))
  )
  claimRemovedEvent.parameters.push(
    new ethereum.EventParam("_protocol", ethereum.Value.fromString(_protocol))
  )
  claimRemovedEvent.parameters.push(
    new ethereum.EventParam("_claim", ethereum.Value.fromString(_claim))
  )

  return claimRemovedEvent
}

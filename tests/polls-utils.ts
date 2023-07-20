import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  UpgradePollStarted,
  DocumentPollStarted,
  UpgradeMajority,
  DocumentMajority,
  OwnershipRenounced,
  OwnershipTransferred
} from "../generated/Polls/Polls"

export function createUpgradePollStartedEvent(
  proposal: Address
): UpgradePollStarted {
  let upgradePollStartedEvent = changetype<UpgradePollStarted>(newMockEvent())

  upgradePollStartedEvent.parameters = new Array()

  upgradePollStartedEvent.parameters.push(
    new ethereum.EventParam("proposal", ethereum.Value.fromAddress(proposal))
  )

  return upgradePollStartedEvent
}

export function createDocumentPollStartedEvent(
  proposal: Bytes
): DocumentPollStarted {
  let documentPollStartedEvent = changetype<DocumentPollStarted>(newMockEvent())

  documentPollStartedEvent.parameters = new Array()

  documentPollStartedEvent.parameters.push(
    new ethereum.EventParam("proposal", ethereum.Value.fromFixedBytes(proposal))
  )

  return documentPollStartedEvent
}

export function createUpgradeMajorityEvent(proposal: Address): UpgradeMajority {
  let upgradeMajorityEvent = changetype<UpgradeMajority>(newMockEvent())

  upgradeMajorityEvent.parameters = new Array()

  upgradeMajorityEvent.parameters.push(
    new ethereum.EventParam("proposal", ethereum.Value.fromAddress(proposal))
  )

  return upgradeMajorityEvent
}

export function createDocumentMajorityEvent(proposal: Bytes): DocumentMajority {
  let documentMajorityEvent = changetype<DocumentMajority>(newMockEvent())

  documentMajorityEvent.parameters = new Array()

  documentMajorityEvent.parameters.push(
    new ethereum.EventParam("proposal", ethereum.Value.fromFixedBytes(proposal))
  )

  return documentMajorityEvent
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

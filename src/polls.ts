import {
  UpgradePollStarted as UpgradePollStartedEvent,
  DocumentPollStarted as DocumentPollStartedEvent,
  UpgradeMajority as UpgradeMajorityEvent,
  DocumentMajority as DocumentMajorityEvent,
  OwnershipRenounced as OwnershipRenouncedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Polls/Polls"
import {
  UpgradePollStarted,
  DocumentPollStarted,
  UpgradeMajority,
  DocumentMajority,
  OwnershipRenounced,
  OwnershipTransferred
} from "../generated/schema"

export function handleUpgradePollStarted(event: UpgradePollStartedEvent): void {
  let entity = new UpgradePollStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposal = event.params.proposal

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDocumentPollStarted(
  event: DocumentPollStartedEvent
): void {
  let entity = new DocumentPollStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposal = event.params.proposal

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgradeMajority(event: UpgradeMajorityEvent): void {
  let entity = new UpgradeMajority(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposal = event.params.proposal

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDocumentMajority(event: DocumentMajorityEvent): void {
  let entity = new DocumentMajority(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposal = event.params.proposal

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipRenounced(event: OwnershipRenouncedEvent): void {
  let entity = new OwnershipRenounced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

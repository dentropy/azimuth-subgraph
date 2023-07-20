import {
  ConditionCompleted as ConditionCompletedEvent,
  Forfeit as ForfeitEvent,
  OwnershipRenounced as OwnershipRenouncedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/ConditionalStarRelease/ConditionalStarRelease"
import {
  ConditionCompleted,
  Forfeit,
  OwnershipRenounced,
  OwnershipTransferred
} from "../generated/schema"

export function handleConditionCompleted(event: ConditionCompletedEvent): void {
  let entity = new ConditionCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.condition = event.params.condition
  entity.when = event.params.when

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleForfeit(event: ForfeitEvent): void {
  let entity = new Forfeit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.who = event.params.who
  entity.batch = event.params.batch
  entity.stars = event.params.stars

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

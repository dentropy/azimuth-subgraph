import {
  ClaimAdded as ClaimAddedEvent,
  ClaimRemoved as ClaimRemovedEvent
} from "../generated/Claims/Claims"
import { ClaimAdded, ClaimRemoved } from "../generated/schema"

export function handleClaimAdded(event: ClaimAddedEvent): void {
  let entity = new ClaimAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.by = event.params.by
  entity._protocol = event.params._protocol
  entity._claim = event.params._claim
  entity._dossier = event.params._dossier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimRemoved(event: ClaimRemovedEvent): void {
  let entity = new ClaimRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.by = event.params.by
  entity._protocol = event.params._protocol
  entity._claim = event.params._claim

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

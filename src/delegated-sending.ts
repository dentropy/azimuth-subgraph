import { Sent as SentEvent } from "../generated/DelegatedSending/DelegatedSending"
import { Sent } from "../generated/schema"

export function handleSent(event: SentEvent): void {
  let entity = new Sent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prefix = event.params.prefix
  entity.fromPool = event.params.fromPool
  entity.by = event.params.by
  entity.point = event.params.point
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

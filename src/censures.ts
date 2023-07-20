import {
  Censured as CensuredEvent,
  Forgiven as ForgivenEvent
} from "../generated/Censures/Censures"
import { Censured, Forgiven } from "../generated/schema"

export function handleCensured(event: CensuredEvent): void {
  let entity = new Censured(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.by = event.params.by
  entity.who = event.params.who

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleForgiven(event: ForgivenEvent): void {
  let entity = new Forgiven(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.by = event.params.by
  entity.who = event.params.who

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

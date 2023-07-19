import {
  OwnerChanged as OwnerChangedEvent,
  Activated as ActivatedEvent,
  Spawned as SpawnedEvent,
  EscapeRequested as EscapeRequestedEvent,
  EscapeCanceled as EscapeCanceledEvent,
  EscapeAccepted as EscapeAcceptedEvent,
  LostSponsor as LostSponsorEvent,
  ChangedKeys as ChangedKeysEvent,
  BrokeContinuity as BrokeContinuityEvent,
  ChangedSpawnProxy as ChangedSpawnProxyEvent,
  ChangedTransferProxy as ChangedTransferProxyEvent,
  ChangedManagementProxy as ChangedManagementProxyEvent,
  ChangedVotingProxy as ChangedVotingProxyEvent,
  ChangedDns as ChangedDnsEvent,
  OwnershipRenounced as OwnershipRenouncedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Azimuth/Azimuth"
import {
  OwnerChanged,
  Activated,
  Spawned,
  EscapeRequested,
  EscapeCanceled,
  EscapeAccepted,
  LostSponsor,
  ChangedKeys,
  BrokeContinuity,
  ChangedSpawnProxy,
  ChangedTransferProxy,
  ChangedManagementProxy,
  ChangedVotingProxy,
  ChangedDns,
  OwnershipRenounced,
  OwnershipTransferred
} from "../generated/schema"

export function handleOwnerChanged(event: OwnerChangedEvent): void {
  let entity = new OwnerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.point = event.params.point
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleActivated(event: ActivatedEvent): void {
  let entity = new Activated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.point = event.params.point

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSpawned(event: SpawnedEvent): void {
  let entity = new Spawned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prefix = event.params.prefix
  entity.child = event.params.child

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEscapeRequested(event: EscapeRequestedEvent): void {
  let entity = new EscapeRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.point = event.params.point
  entity.sponsor = event.params.sponsor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEscapeCanceled(event: EscapeCanceledEvent): void {
  let entity = new EscapeCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.point = event.params.point
  entity.sponsor = event.params.sponsor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEscapeAccepted(event: EscapeAcceptedEvent): void {
  let entity = new EscapeAccepted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.point = event.params.point
  entity.sponsor = event.params.sponsor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLostSponsor(event: LostSponsorEvent): void {
  let entity = new LostSponsor(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.point = event.params.point
  entity.sponsor = event.params.sponsor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangedKeys(event: ChangedKeysEvent): void {
  let entity = new ChangedKeys(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.point = event.params.point
  entity.encryptionKey = event.params.encryptionKey
  entity.authenticationKey = event.params.authenticationKey
  entity.cryptoSuiteVersion = event.params.cryptoSuiteVersion
  entity.keyRevisionNumber = event.params.keyRevisionNumber

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBrokeContinuity(event: BrokeContinuityEvent): void {
  let entity = new BrokeContinuity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.point = event.params.point
  entity.number = event.params.number

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangedSpawnProxy(event: ChangedSpawnProxyEvent): void {
  let entity = new ChangedSpawnProxy(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.point = event.params.point
  entity.spawnProxy = event.params.spawnProxy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangedTransferProxy(
  event: ChangedTransferProxyEvent
): void {
  let entity = new ChangedTransferProxy(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.point = event.params.point
  entity.transferProxy = event.params.transferProxy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangedManagementProxy(
  event: ChangedManagementProxyEvent
): void {
  let entity = new ChangedManagementProxy(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.point = event.params.point
  entity.managementProxy = event.params.managementProxy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangedVotingProxy(event: ChangedVotingProxyEvent): void {
  let entity = new ChangedVotingProxy(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.point = event.params.point
  entity.votingProxy = event.params.votingProxy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangedDns(event: ChangedDnsEvent): void {
  let entity = new ChangedDns(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.primary = event.params.primary
  entity.secondary = event.params.secondary
  entity.tertiary = event.params.tertiary

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

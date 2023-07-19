import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/Azimuth/Azimuth"

export function createOwnerChangedEvent(
  point: BigInt,
  owner: Address
): OwnerChanged {
  let ownerChangedEvent = changetype<OwnerChanged>(newMockEvent())

  ownerChangedEvent.parameters = new Array()

  ownerChangedEvent.parameters.push(
    new ethereum.EventParam("point", ethereum.Value.fromUnsignedBigInt(point))
  )
  ownerChangedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return ownerChangedEvent
}

export function createActivatedEvent(point: BigInt): Activated {
  let activatedEvent = changetype<Activated>(newMockEvent())

  activatedEvent.parameters = new Array()

  activatedEvent.parameters.push(
    new ethereum.EventParam("point", ethereum.Value.fromUnsignedBigInt(point))
  )

  return activatedEvent
}

export function createSpawnedEvent(prefix: BigInt, child: BigInt): Spawned {
  let spawnedEvent = changetype<Spawned>(newMockEvent())

  spawnedEvent.parameters = new Array()

  spawnedEvent.parameters.push(
    new ethereum.EventParam("prefix", ethereum.Value.fromUnsignedBigInt(prefix))
  )
  spawnedEvent.parameters.push(
    new ethereum.EventParam("child", ethereum.Value.fromUnsignedBigInt(child))
  )

  return spawnedEvent
}

export function createEscapeRequestedEvent(
  point: BigInt,
  sponsor: BigInt
): EscapeRequested {
  let escapeRequestedEvent = changetype<EscapeRequested>(newMockEvent())

  escapeRequestedEvent.parameters = new Array()

  escapeRequestedEvent.parameters.push(
    new ethereum.EventParam("point", ethereum.Value.fromUnsignedBigInt(point))
  )
  escapeRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "sponsor",
      ethereum.Value.fromUnsignedBigInt(sponsor)
    )
  )

  return escapeRequestedEvent
}

export function createEscapeCanceledEvent(
  point: BigInt,
  sponsor: BigInt
): EscapeCanceled {
  let escapeCanceledEvent = changetype<EscapeCanceled>(newMockEvent())

  escapeCanceledEvent.parameters = new Array()

  escapeCanceledEvent.parameters.push(
    new ethereum.EventParam("point", ethereum.Value.fromUnsignedBigInt(point))
  )
  escapeCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "sponsor",
      ethereum.Value.fromUnsignedBigInt(sponsor)
    )
  )

  return escapeCanceledEvent
}

export function createEscapeAcceptedEvent(
  point: BigInt,
  sponsor: BigInt
): EscapeAccepted {
  let escapeAcceptedEvent = changetype<EscapeAccepted>(newMockEvent())

  escapeAcceptedEvent.parameters = new Array()

  escapeAcceptedEvent.parameters.push(
    new ethereum.EventParam("point", ethereum.Value.fromUnsignedBigInt(point))
  )
  escapeAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "sponsor",
      ethereum.Value.fromUnsignedBigInt(sponsor)
    )
  )

  return escapeAcceptedEvent
}

export function createLostSponsorEvent(
  point: BigInt,
  sponsor: BigInt
): LostSponsor {
  let lostSponsorEvent = changetype<LostSponsor>(newMockEvent())

  lostSponsorEvent.parameters = new Array()

  lostSponsorEvent.parameters.push(
    new ethereum.EventParam("point", ethereum.Value.fromUnsignedBigInt(point))
  )
  lostSponsorEvent.parameters.push(
    new ethereum.EventParam(
      "sponsor",
      ethereum.Value.fromUnsignedBigInt(sponsor)
    )
  )

  return lostSponsorEvent
}

export function createChangedKeysEvent(
  point: BigInt,
  encryptionKey: Bytes,
  authenticationKey: Bytes,
  cryptoSuiteVersion: BigInt,
  keyRevisionNumber: BigInt
): ChangedKeys {
  let changedKeysEvent = changetype<ChangedKeys>(newMockEvent())

  changedKeysEvent.parameters = new Array()

  changedKeysEvent.parameters.push(
    new ethereum.EventParam("point", ethereum.Value.fromUnsignedBigInt(point))
  )
  changedKeysEvent.parameters.push(
    new ethereum.EventParam(
      "encryptionKey",
      ethereum.Value.fromFixedBytes(encryptionKey)
    )
  )
  changedKeysEvent.parameters.push(
    new ethereum.EventParam(
      "authenticationKey",
      ethereum.Value.fromFixedBytes(authenticationKey)
    )
  )
  changedKeysEvent.parameters.push(
    new ethereum.EventParam(
      "cryptoSuiteVersion",
      ethereum.Value.fromUnsignedBigInt(cryptoSuiteVersion)
    )
  )
  changedKeysEvent.parameters.push(
    new ethereum.EventParam(
      "keyRevisionNumber",
      ethereum.Value.fromUnsignedBigInt(keyRevisionNumber)
    )
  )

  return changedKeysEvent
}

export function createBrokeContinuityEvent(
  point: BigInt,
  number: BigInt
): BrokeContinuity {
  let brokeContinuityEvent = changetype<BrokeContinuity>(newMockEvent())

  brokeContinuityEvent.parameters = new Array()

  brokeContinuityEvent.parameters.push(
    new ethereum.EventParam("point", ethereum.Value.fromUnsignedBigInt(point))
  )
  brokeContinuityEvent.parameters.push(
    new ethereum.EventParam("number", ethereum.Value.fromUnsignedBigInt(number))
  )

  return brokeContinuityEvent
}

export function createChangedSpawnProxyEvent(
  point: BigInt,
  spawnProxy: Address
): ChangedSpawnProxy {
  let changedSpawnProxyEvent = changetype<ChangedSpawnProxy>(newMockEvent())

  changedSpawnProxyEvent.parameters = new Array()

  changedSpawnProxyEvent.parameters.push(
    new ethereum.EventParam("point", ethereum.Value.fromUnsignedBigInt(point))
  )
  changedSpawnProxyEvent.parameters.push(
    new ethereum.EventParam(
      "spawnProxy",
      ethereum.Value.fromAddress(spawnProxy)
    )
  )

  return changedSpawnProxyEvent
}

export function createChangedTransferProxyEvent(
  point: BigInt,
  transferProxy: Address
): ChangedTransferProxy {
  let changedTransferProxyEvent = changetype<ChangedTransferProxy>(
    newMockEvent()
  )

  changedTransferProxyEvent.parameters = new Array()

  changedTransferProxyEvent.parameters.push(
    new ethereum.EventParam("point", ethereum.Value.fromUnsignedBigInt(point))
  )
  changedTransferProxyEvent.parameters.push(
    new ethereum.EventParam(
      "transferProxy",
      ethereum.Value.fromAddress(transferProxy)
    )
  )

  return changedTransferProxyEvent
}

export function createChangedManagementProxyEvent(
  point: BigInt,
  managementProxy: Address
): ChangedManagementProxy {
  let changedManagementProxyEvent = changetype<ChangedManagementProxy>(
    newMockEvent()
  )

  changedManagementProxyEvent.parameters = new Array()

  changedManagementProxyEvent.parameters.push(
    new ethereum.EventParam("point", ethereum.Value.fromUnsignedBigInt(point))
  )
  changedManagementProxyEvent.parameters.push(
    new ethereum.EventParam(
      "managementProxy",
      ethereum.Value.fromAddress(managementProxy)
    )
  )

  return changedManagementProxyEvent
}

export function createChangedVotingProxyEvent(
  point: BigInt,
  votingProxy: Address
): ChangedVotingProxy {
  let changedVotingProxyEvent = changetype<ChangedVotingProxy>(newMockEvent())

  changedVotingProxyEvent.parameters = new Array()

  changedVotingProxyEvent.parameters.push(
    new ethereum.EventParam("point", ethereum.Value.fromUnsignedBigInt(point))
  )
  changedVotingProxyEvent.parameters.push(
    new ethereum.EventParam(
      "votingProxy",
      ethereum.Value.fromAddress(votingProxy)
    )
  )

  return changedVotingProxyEvent
}

export function createChangedDnsEvent(
  primary: string,
  secondary: string,
  tertiary: string
): ChangedDns {
  let changedDnsEvent = changetype<ChangedDns>(newMockEvent())

  changedDnsEvent.parameters = new Array()

  changedDnsEvent.parameters.push(
    new ethereum.EventParam("primary", ethereum.Value.fromString(primary))
  )
  changedDnsEvent.parameters.push(
    new ethereum.EventParam("secondary", ethereum.Value.fromString(secondary))
  )
  changedDnsEvent.parameters.push(
    new ethereum.EventParam("tertiary", ethereum.Value.fromString(tertiary))
  )

  return changedDnsEvent
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

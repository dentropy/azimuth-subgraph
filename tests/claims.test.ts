import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import { ClaimAdded } from "../generated/schema"
import { ClaimAdded as ClaimAddedEvent } from "../generated/Claims/Claims"
import { handleClaimAdded } from "../src/claims"
import { createClaimAddedEvent } from "./claims-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let by = BigInt.fromI32(234)
    let _protocol = "Example string value"
    let _claim = "Example string value"
    let _dossier = Bytes.fromI32(1234567890)
    let newClaimAddedEvent = createClaimAddedEvent(
      by,
      _protocol,
      _claim,
      _dossier
    )
    handleClaimAdded(newClaimAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ClaimAdded created and stored", () => {
    assert.entityCount("ClaimAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ClaimAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "by",
      "234"
    )
    assert.fieldEquals(
      "ClaimAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_protocol",
      "Example string value"
    )
    assert.fieldEquals(
      "ClaimAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_claim",
      "Example string value"
    )
    assert.fieldEquals(
      "ClaimAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_dossier",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { OwnershipRenounced } from "../generated/schema"
import { OwnershipRenounced as OwnershipRenouncedEvent } from "../generated/LinearStarRelease/LinearStarRelease"
import { handleOwnershipRenounced } from "../src/linear-star-release"
import { createOwnershipRenouncedEvent } from "./linear-star-release-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let previousOwner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newOwnershipRenouncedEvent = createOwnershipRenouncedEvent(
      previousOwner
    )
    handleOwnershipRenounced(newOwnershipRenouncedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("OwnershipRenounced created and stored", () => {
    assert.entityCount("OwnershipRenounced", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "OwnershipRenounced",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "previousOwner",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

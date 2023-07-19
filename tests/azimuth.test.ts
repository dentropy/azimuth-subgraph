import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { OwnerChanged } from "../generated/schema"
import { OwnerChanged as OwnerChangedEvent } from "../generated/Azimuth/Azimuth"
import { handleOwnerChanged } from "../src/azimuth"
import { createOwnerChangedEvent } from "./azimuth-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let point = BigInt.fromI32(234)
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let newOwnerChangedEvent = createOwnerChangedEvent(point, owner)
    handleOwnerChanged(newOwnerChangedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("OwnerChanged created and stored", () => {
    assert.entityCount("OwnerChanged", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "OwnerChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "point",
      "234"
    )
    assert.fieldEquals(
      "OwnerChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

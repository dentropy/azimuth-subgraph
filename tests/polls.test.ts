import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes } from "@graphprotocol/graph-ts"
import { UpgradePollStarted } from "../generated/schema"
import { UpgradePollStarted as UpgradePollStartedEvent } from "../generated/Polls/Polls"
import { handleUpgradePollStarted } from "../src/polls"
import { createUpgradePollStartedEvent } from "./polls-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let proposal = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newUpgradePollStartedEvent = createUpgradePollStartedEvent(proposal)
    handleUpgradePollStarted(newUpgradePollStartedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("UpgradePollStarted created and stored", () => {
    assert.entityCount("UpgradePollStarted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "UpgradePollStarted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "proposal",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

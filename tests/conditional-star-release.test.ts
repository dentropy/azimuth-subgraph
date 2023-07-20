import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ConditionCompleted } from "../generated/schema"
import { ConditionCompleted as ConditionCompletedEvent } from "../generated/ConditionalStarRelease/ConditionalStarRelease"
import { handleConditionCompleted } from "../src/conditional-star-release"
import { createConditionCompletedEvent } from "./conditional-star-release-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let condition = 123
    let when = BigInt.fromI32(234)
    let newConditionCompletedEvent = createConditionCompletedEvent(
      condition,
      when
    )
    handleConditionCompleted(newConditionCompletedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ConditionCompleted created and stored", () => {
    assert.entityCount("ConditionCompleted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ConditionCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "condition",
      "123"
    )
    assert.fieldEquals(
      "ConditionCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "when",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

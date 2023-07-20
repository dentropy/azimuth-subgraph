import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { Censured } from "../generated/schema"
import { Censured as CensuredEvent } from "../generated/Censures/Censures"
import { handleCensured } from "../src/censures"
import { createCensuredEvent } from "./censures-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let by = 123
    let who = BigInt.fromI32(234)
    let newCensuredEvent = createCensuredEvent(by, who)
    handleCensured(newCensuredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Censured created and stored", () => {
    assert.entityCount("Censured", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Censured",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "by",
      "123"
    )
    assert.fieldEquals(
      "Censured",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "who",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

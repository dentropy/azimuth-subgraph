import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { Sent } from "../generated/schema"
import { Sent as SentEvent } from "../generated/DelegatedSending/DelegatedSending"
import { handleSent } from "../src/delegated-sending"
import { createSentEvent } from "./delegated-sending-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let prefix = 123
    let fromPool = BigInt.fromI32(234)
    let by = BigInt.fromI32(234)
    let point = BigInt.fromI32(234)
    let to = Address.fromString("0x0000000000000000000000000000000000000001")
    let newSentEvent = createSentEvent(prefix, fromPool, by, point, to)
    handleSent(newSentEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Sent created and stored", () => {
    assert.entityCount("Sent", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Sent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "prefix",
      "123"
    )
    assert.fieldEquals(
      "Sent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fromPool",
      "234"
    )
    assert.fieldEquals(
      "Sent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "by",
      "234"
    )
    assert.fieldEquals(
      "Sent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "point",
      "234"
    )
    assert.fieldEquals(
      "Sent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "to",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

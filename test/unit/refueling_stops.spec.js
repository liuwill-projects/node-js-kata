import chai from 'chai'
import { minRefuelStops, DRIVE_FAIL } from '../../src/kata/refueling_stops'

const { expect, assert } = chai

describe('min number of refueling stops', function () {
  it('should fail because start fuel is not enough', function () {
    let result = minRefuelStops(100, 1, [])
    expect(result).to.equal(DRIVE_FAIL)
  })

  it('should success when pass example case', function () {
    let result = minRefuelStops(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]])
    expect(result).to.equal(2)
  })

  it('should success when start fuel is enough', function () {
    let result = minRefuelStops(10, 100, [])
    expect(result).to.equal(0)
  })

  it('should fail when start fuel is not enouph to the first station', function () {
    let result = minRefuelStops(100, 10, [[20, 60], [30, 30], [60, 40]])
    expect(result).to.equal(DRIVE_FAIL)
  })

  it('should our drive can not be finished', function () {
    let result = minRefuelStops(100, 10, [[10, 10], [20, 10], [30, 10], [60, 40]])
    expect(result).to.equal(DRIVE_FAIL)
  })
})

import chai from 'chai'
import * as insertSorter from '../../src/algorithm/insertion_sort'

const { expect, assert } = chai

describe('insertion sort', function () {
  it('should sort as we want', function () {
    let rawList = [4, 3, 5, 21, 7, 8, 15, 1]
    let target = insertSorter.insertSort(rawList)


    let answer = Array.from(rawList)
    answer.sort((x, y) => {
      if (x < y) { return -1 }
      else if (x > y) { return 1 }
      return 0
    })
    expect(answer).to.deep.equal(target)
  })
})

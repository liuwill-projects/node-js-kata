import chai from 'chai'
import * as countVowelPermutation from '../../../src/kata/count_vowel_permutation'

const { expect, assert } = chai

describe('count vowel permutation', function () {
  it('should countVowelPermutation as we want', function () {
    const sourceCase = [1, 2, 5, 144]
    const expectList = [5, 10, 68, 18208803]
    for (let i = 0; i < sourceCase.length; i++) {
      let target = countVowelPermutation.countVowelPermutation(sourceCase[i])
      expect(target).to.be.equal(expectList[i])
    }
  })
})

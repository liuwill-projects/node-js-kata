
/**
 * weekly-contest-1220
 * PUZZLE: Count Vowels Permutation
 */
const countVowelPermutation = function (n) {
  const modulo = 1e9 + 7
  const currentView = {
    'a': 1,
    'e': 1,
    'i': 1,
    'o': 1,
    'u': 1,
  }

  for (let i = 1; i < n; i++) {
    let nextView = {
      'a': (currentView['e'] + currentView['i'] + currentView['u']) % modulo,
      'e': (currentView['a'] + currentView['i']) % modulo,
      'i': (currentView['e'] + currentView['o']) % modulo,
      'o': currentView['i'] % modulo,
      'u': (currentView['i'] + currentView['o']) % modulo,
    }

    Object.assign(currentView, nextView)
  }

  return Object.values(currentView).reduce((a, b) => a + b, 0) % modulo
}

module.exports = {
  countVowelPermutation,
}

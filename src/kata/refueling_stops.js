/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
  let stack = []
  if (target <= startFuel) {
    return 0
  }

  if (!stations.length) {
    return -1
  }
  let firstNode = stations[0]
  if (startFuel < firstNode[0]) {
    return -1
  }

  // let minStations = stations.map(item => 0)
  stack.push({
    step: 0,
    position: -1,
    fuel: startFuel,
    distance: 0,
  })
  let minStops = stations.length
  let finished = false
  while (stack.length) {
    let current = stack.pop()

    for (let i = current.position + 1; i < stations.length; i++) {
      let node = stations[i]
      if (node[0] > current.fuel) {
        break
      }

      if (current.fuel + node[1] >= target) {
        finished = true
        if (current.step + 1 < minStops) {
          minStops = current.step + 1
        }
        continue
      }

      stack.push({
        step: current.step + 1,
        position: i,
        fuel: current.fuel + node[1],
        distance: node[0],
      })
    }
	}
  if (!finished) {
    return -1
  }

  return minStops
}

module.exports = {
  minRefuelStops,
  DRIVE_FAIL: -1,
}
// minRefuelStops(1000,36, [[7,13],[10,11],[12,31],[22,14],[32,26],[38,16],[50,8],[54,13],[75,4],[85,2],[88,35],[90,9],[96,35],[103,16],[115,33],[121,6],[123,1],[138,2],[139,34],[145,30],[149,14],[160,21],[167,14],[188,7],[196,27],[248,4],[256,35],[262,16],[264,12],[283,23],[297,15],[307,25],[311,35],[316,6],[345,30],[348,2],[354,21],[360,10],[362,28],[363,29],[367,7],[370,13],[402,6],[410,32],[447,20],[453,13],[454,27],[468,1],[470,8],[471,11],[474,34],[486,13],[490,16],[495,10],[527,9],[533,14],[553,36],[554,23],[605,5],[630,17],[635,30],[640,31],[646,9],[647,12],[659,5],[664,34],[667,35],[676,6],[690,19],[709,10],[721,28],[734,2],[742,6],[772,22],[777,32],[778,36],[794,7],[812,24],[813,33],[815,14],[816,21],[824,17],[826,3],[838,14],[840,8],[853,29],[863,18],[867,1],[881,27],[886,27],[894,26],[917,3],[953,6],[956,3],[957,28],[962,33],[967,35],[972,34],[984,8],[987,12]])


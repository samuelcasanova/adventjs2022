function distributeGifts(packOfGifts, reindeers) {
  let totalUpdatedReindeersCapacity = reindeers.reduce((acc, currentReindeer) => acc + currentReindeer.length * 2, 0)
  const packWeight = packOfGifts.reduce((acc, currentItem) => acc + currentItem.length, 0)
  return Math.floor(totalUpdatedReindeersCapacity / packWeight)
}


console.log('INITIAL UNIT TESTS')
// const packWeights = getPackWeights(['hello', 'world'])
// console.log(`packWeights: expected [5,5] got [${packWeights}]`)
// const reindeersCapacity = getReindeersCapacity(['dasher', 'dancer'])
// console.log(`reindeersCapacity: expected [12,12] got [${reindeersCapacity}]`)
// const newReindeersCapacity = subtractWeightFromReindeersCapacity(3, [6,6])
// console.log(`newReindeersCapacity: expected [3,6] got [${newReindeersCapacity}]`)
// const newReindeersCapacity2 = subtractPackWeightsFromReindeersCapacity([3,3], [6,6])
// console.log(`newReindeersCapacity: expected [0,6] got [${newReindeersCapacity2}]`)


console.log('INTEGRATION TESTS')

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]
// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
const result = distributeGifts(packOfGifts, reindeers)
console.log(`result: expected 2 got ${result}`)


const packOfGifts2 = ["dee", "cat", "dog"]
const reindeers2 = ["dasherers", "dancerers"]
// pack weights 3 + 3 + 3 = 9
// reindeers can carry (2 * 9) + (2 * 9) = 36
const result2 = distributeGifts(packOfGifts2, reindeers2)
console.log(`result: expected 4 got ${result2}`)


const packOfGifts3 = ['a', 'b', 'c']
const reindeers3 = ['d', 'e']
// pack weights 1 + 1 + 1 = 3
// reindeers can carry (2 * 1) + (2 * 1) = 4
const result3 = distributeGifts(packOfGifts3, reindeers3)
console.log(`result: expected 1 got ${result3}`)


const packOfGifts4 = ['music']
const reindeers4 = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']
// pack weights 5 = 5
// reindeers can carry (2 * 7) + (2 * 7) + (2 * 14) + (2 * 9) + (2 * 6) + (2 * 12) + (2 * 7) + (2 * 5) = 14+14+28+18+12+24+14+10 = 134
const result4 = distributeGifts(packOfGifts4, reindeers4)
console.log(`result: expected 26 got ${result4}`)


Test: distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])

Expected:
26

Actual:
22
function distributeGifts(packOfGifts, reindeers) {
  let totalUpdatedReindeersCapacity = reindeers.reduce((acc, currentReindeer) => acc + currentReindeer.length * 2, 0)
  const packWeight = packOfGifts.reduce((acc, currentItem) => acc + currentItem.length, 0)
  return Math.floor(totalUpdatedReindeersCapacity / packWeight)
}

it('should return 2', () => {
  const packOfGifts = ["book", "doll", "ball"]
  const reindeers = ["dasher", "dancer"]
  // pack weights 4 + 4 + 4 = 12
  // reindeers can carry (2 * 6) + (2 * 6) = 24

  const result = distributeGifts(packOfGifts, reindeers)

  expect(result).toBe(2)
})

it('should return 4', () => {
  const packOfGifts = ["dee", "cat", "dog"]
  const reindeers = ["dasherers", "dancerers"]
  // pack weights 3 + 3 + 3 = 9
  // reindeers can carry (2 * 9) + (2 * 9) = 36

  const result = distributeGifts(packOfGifts, reindeers)

  expect(result).toBe(4)
})

it('should return 1', () => {
  const packOfGifts = ['a', 'b', 'c']
  const reindeers = ['d', 'e']
  // pack weights 1 + 1 + 1 = 3
  // reindeers can carry (2 * 1) + (2 * 1) = 4

  const result = distributeGifts(packOfGifts, reindeers)

  expect(result).toBe(1)
})

it('should return 26', () => {
  const packOfGifts = ['music']
  const reindeers = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']
  // pack weights 5 = 5
  // reindeers can carry (2 * 7) + (2 * 7) + (2 * 14) + (2 * 9) + (2 * 6) + (2 * 12) + (2 * 7) + (2 * 5) = 14+14+28+18+12+24+14+10 = 134

  const result = distributeGifts(packOfGifts, reindeers)

  expect(result).toBe(26)
})

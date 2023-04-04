function getMaxGifts(giftsCities, maxGifts, maxCities) {
  function getSumCombinations(acc, numArray) {
    const incr = [...acc, ...acc.map(comb => ({ 
      cities: comb.cities + 1, 
      gifts: comb.gifts + numArray[0]
    }))]
    return numArray.length === 1 ? 
      incr : 
      getSumCombinations(incr, numArray.slice(1))
  }
  const combinations = getSumCombinations(
    [{cities:0,gifts:0}], 
    giftsCities
  )
  const result = combinations.reduce((prev, curr) => 
    (curr.cities <= maxCities && 
      curr.gifts > prev && 
      curr.gifts <= maxGifts ?
      curr.gifts : 
      prev), 0)
  return result
}


it('should return 0 he cant drop any gift in any city', () => {
  const gifts = getMaxGifts([50], 15, 1) // 0
  
  expect(gifts).toBe(0)
})

it('should return 50 if its a single city and the max is 100', () => {
  const gifts = getMaxGifts([50], 100, 1) // 50

  expect(gifts).toBe(50)
})

it('should return 70 if he can drop only in one city with this 70', () => {
  const gifts = getMaxGifts([50, 70], 100, 1) // 70

  expect(gifts).toBe(70)
})

it('should return 20 or die', () => {
  const gifts = getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20

  expect(gifts).toBe(20)
})

it('should return 100', () => {
  const gifts = getMaxGifts([50, 70, 30], 100, 2) // 100

  expect(gifts).toBe(100)
})

it('should return 100 again', () => {
  const gifts = getMaxGifts([50, 70, 30], 100, 3) // 100

  expect(gifts).toBe(100)
})

it('should return 100 again and again', () => {
  const gifts = getMaxGifts([50, 70, 30], 100, 4) // 100

  expect(gifts).toBe(100)
})

it('should return 54, final monster', () => {
  const gifts = getMaxGifts([0,1,5,6,23,9,0,31],54,2)

  expect(gifts).toBe(54)
})

// it('should return [0,1] with [1]', () => {
//   const combinations = getSumCombinations([{cities:0, gifts:0}], [1])

//   expect(combinations).toHaveLength(2)
//   expect(combinations[0]).toStrictEqual({cities:0, gifts:0})
//   expect(combinations[1]).toStrictEqual({cities:1, gifts:1})
// })

// it('should return [0,1,2,3] with [1,2]', () => {
//   const combinations = getSumCombinations([{cities:0, gifts:0}], [1,2])

//   expect(combinations).toHaveLength(4)
//   expect(combinations[0]).toStrictEqual({cities:0,gifts:0})
//   expect(combinations[1]).toStrictEqual({cities:1,gifts:1})
//   expect(combinations[2]).toStrictEqual({cities:1,gifts:2})
//   expect(combinations[3]).toStrictEqual({cities:2,gifts:3})
// })

// it('should return [0,1,5,6] with [1,5]', () => {
//   const combinations = getSumCombinations([{cities:0, gifts:0}], [1,5])

//   expect(combinations).toHaveLength(4)
//   expect(combinations[0]).toStrictEqual({cities:0,gifts:0})
//   expect(combinations[1]).toStrictEqual({cities:1,gifts:1})
//   expect(combinations[2]).toStrictEqual({cities:1,gifts:5})
//   expect(combinations[3]).toStrictEqual({cities:2,gifts:6})
// })

// it('should return [0,1,3,4,6,7,9,10] with [1,3,6]', () => {
//   const combinations = getSumCombinations([{cities:0, gifts:0}], [1,3,6])

//   expect(combinations).toHaveLength(8)
//   expect(combinations[0]).toStrictEqual({cities:0,gifts:0})
//   expect(combinations[1]).toStrictEqual({cities:1,gifts:1})
//   expect(combinations[2]).toStrictEqual({cities:1,gifts:3})
//   expect(combinations[3]).toStrictEqual({cities:2,gifts:4})
//   expect(combinations[4]).toStrictEqual({cities:1,gifts:6})
//   expect(combinations[5]).toStrictEqual({cities:2,gifts:7})
//   expect(combinations[6]).toStrictEqual({cities:2,gifts:9})
//   expect(combinations[7]).toStrictEqual({cities:3,gifts:10})
// })


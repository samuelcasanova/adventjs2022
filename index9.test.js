function countTime(leds) {
  if (leds.every(l => l === 1)) {
    return 0
  }
  const startsAndEndsWithZero = leds[0] === 0 && leds[leds.length - 1] === 0
  const first1 = leds.findIndex(l => l === 1)
  const ledsStr = leds.join('')
  const finalLedsStr = startsAndEndsWithZero ?
    `${ledsStr.slice(first1)}${ledsStr.slice(0, first1)}` :
    ledsStr
  const groups = finalLedsStr.match(/0+/)
  const longestGroup = groups.reduce((acc, curr) => 
    (curr.length > acc ? 
      curr.length : 
      acc), 
    0)
  return longestGroup * 7
}

it('should return 0 if array length is 0', () => {
  expect(countTime([])).toBe(0)
})

it('should return 0 if the only led is on', () => {
  expect(countTime([1])).toBe(0)
})

it('should return 0 if all leds are on', () => {
  expect(countTime([1, 1])).toBe(0)
})

it('should return 7 if only one led is off', () => {
  expect(countTime([1, 0])).toBe(7)
})

it('should return 7 if 2 individual leds are off but have 1 on their right', () => {
  expect(countTime([0, 1, 1, 0, 1])).toBe(7)
})

it('should return 14 if 2 leds are off but have 1 on their right', () => {
  expect(countTime([0, 1, 0, 0, 1])).toBe(7)
})

it('should return 21 if 3 subsequent leds are off with 1 on their right', () => {
  expect(countTime([0, 0, 0, 1])).toBe(21)
})

it('should return 28 if 4 subsequent leds are off with 1 on their right, even splitted start and end', () => {
  expect(countTime([0, 0, 1, 0, 0])).toBe(28)
})

it('should return 28 if 4 subsequent leds are off with 1 on their right', () => {
  expect(countTime([0, 0, 1, 0, 0, 0, 0, 1, 0])).toBe(28)
})

it('should return 14 when the led string is [1, 0, 0, 1, 0, 0]', () => {
  expect(countTime([1, 0, 0, 1, 0, 0])).toBe(14)
})

it('should return 28 when the led string is [1, 1, 0, 0, 0, 0]', () => {
  expect(countTime([1, 1, 0, 0, 0, 0])).toBe(28)
})

it('should return 0 when the led string is [1, 1, 1]', () => {
  expect(countTime([1, 1, 1])).toBe(0)
})

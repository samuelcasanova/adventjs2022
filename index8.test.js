function checkPart(part) {
  const reverse = part.split('').reverse().join('')
  if (reverse === part) {
    return true
  }
  for(let i = 0; i < part.length; i++) {
    const newWord = `${part.slice(0, i)}${part.slice(i + 1)}`
    const newReverse = newWord.split('').reverse().join('')
    if (newReverse === newWord) {
      return true
    }
  }
  return false
}

it('should return true with a palindrome', () => {
  expect(checkPart('alabala')).toBe(true)
})

it('should return false with a normal random non palindrome word', () => {
  expect(checkPart('genius')).toBe(false)
})

it('should return true if removing a character you have a palindrome', () => {
  expect(checkPart('miidim')).toBe(true)
})

it('should return true if removing a character you have a palindrome', () => {
  expect(checkPart('racecar')).toBe(true)
})
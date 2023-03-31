function getGiftsToRefill(a1, a2, a3) {
  const toRefilla1 = a1.reduce((acc, currentGift) => {
    if ([...a2, ...a3].includes(currentGift) 
      || acc.includes(currentGift)) {
      return acc
    } else {
      return [...acc, currentGift]
    }
  }, [])
  const toRefilla2 = a2.reduce((acc, currentGift) => {
    if ([...a1, ...a3].includes(currentGift) 
      || acc.includes(currentGift)) {
      return acc
    } else {
      return [...acc, currentGift]
    }
  }, toRefilla1)
  return a3.reduce((acc, currentGift) => {
    if ([...a1, ...a2].includes(currentGift) 
      || acc.includes(currentGift)) {
      return acc
    } else {
      return [...acc, currentGift]
    }
  }, toRefilla2)
}

it('should refill 0 products if all are present', () => {
  const a1 = ['a', 'b']

  const result = getGiftsToRefill(a1, a1, a1)
  expect(result).toStrictEqual([])
})

it('should refill 2 products if there are 2 missing', () => {
  const a1 = ['bike', 'car', 'bike', 'bike']
  const a2 = ['car', 'bike', 'doll', 'car']
  const a3 = ['bike', 'pc', 'pc']

  const result = getGiftsToRefill(a1, a2, a3)
  expect(result).toStrictEqual(['doll', 'pc'])
})
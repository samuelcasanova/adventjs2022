const uncutPaper = '**********************************************************************************************************************'
function wrapping(gifts) {
  return gifts.map(gift => {
    const paper = uncutPaper.substring(0, gift.length + 2)
    return `${paper}\n*${gift}*\n${paper}`
  })
}

it('should met expected output', () => {
  const gifts = ['cat', 'game', 'socks']
  const expected = [
    '*****\n*cat*\n*****',
    '******\n*game*\n******',
    '*******\n*socks*\n*******'
  ]

  const wrapped = wrapping(gifts)

  expect(wrapped).toStrictEqual(expected)
})

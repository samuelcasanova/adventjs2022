const gifts = ['cat', 'game', 'socks']

console.log('ACTUAL\n')
const wrapped = wrapping(gifts)
console.log(wrapped)


console.log('EXPECTED\n')
console.log(`
*****\n*cat*\n*****
******\n*game*\n******
*******\n*socks*\n*******
`)

const uncutPaper = '**********************************************************************************************************************'
function wrapping(gifts) {
  return gifts.map(gift => {
    const paper = uncutPaper.substring(0, gift.length + 2)
    return `${paper}\n*${gift}*\n${paper}`
  })
}

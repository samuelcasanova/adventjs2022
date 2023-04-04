function countHours(year, holidays) {
  return holidays.reduce((acc, current) => {
  	const month = parseInt(current.substring(0,2)) - 1
    const day = parseInt(current.substring(3, 5))
  	const date = new Date(year, month, day)
    return acc + (![0,6].includes(date.getDay()) ? 2 : 0)
  }, 0)
}

it('should count 4 hours', () => {
  const year = 2022
  const holidays = ['01/06', '04/01', '12/25'] // format MM/DD
  
  // 01/06 is January 6, Thursday. Count.
  // 04/01 is April 1, Friday. Count.
  // 12/25 is December 25, Sunday. Do not count.
  
  const count = countHours(year, holidays)
  
  expect(count).toBe(4)
})
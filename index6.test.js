const fs = require('fs')

function createCube(size) {
  let cube = ''
  for(let i = size - 1; i >= 0; i--) {
    cube = 
      ' '.repeat(size-1-i).concat('/', 
      '\\/'.repeat(i), '\\_'.repeat(size), '\\\n',
      cube,
      ' '.repeat(size-1-i), '\\', '/\\'.repeat(i), '/',
      '_/'.repeat(size), i !== 0 ? '\n' : '')
  }
  return cube
}

it('should create a cube of 1', () => {
  const expectedResult = fs.readFileSync('cubes/cube1.txt', { encoding: 'utf-8'})

  const cubeOfOne = createCube(1)

  expect(cubeOfOne).toBe(expectedResult)
})

it('should create a cube of 2', () => {
  const expectedResult = fs.readFileSync('cubes/cube2.txt', { encoding: 'utf-8'})

  const cubeOfTwo = createCube(2)

  expect(cubeOfTwo).toBe(expectedResult)
})

it('should create a cube of 3', () => {
  const expectedResult = fs.readFileSync('cubes/cube3.txt', { encoding: 'utf-8'})

  const cubeOfThree = createCube(3)

  expect(cubeOfThree).toBe(expectedResult)
})


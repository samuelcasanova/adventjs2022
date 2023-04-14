// Create a program that checks if Santa's sleigh makes a parabola jump between cities. You receive a number array that represents the height at which the sleigh is at each moment.

// For the parabola to be correct, the sleigh's trip must be ascending at the beginning and descending at the end. It cannot go up again once it has gone down, nor can it start the trip going down. Let's see some examples:

// const heights = [1, 3, 8, 5, 2]
// checkJump(heights) // true

// const heights = [1, 7, 3, 5]
// checkJump(heights) // false

function checkJump(heights) {
  if(!heights || !heights.length || heights.length < 3) {
    return false
  }
  const STARTING = 1
  const UP = 2
  const DOWN = 3
  let state = STARTING
  for(let i = 1; i < heights.length; i++) {
    const prev = heights[i - 1]
    const curr = heights[i]
    if (prev === curr) {
      continue
    }
    if (state === STARTING) {
      if (prev < curr) {
        state = UP
        continue
      } else {
        return false
      }
    } else if (state === UP && prev > curr) {
      state = DOWN
    } else if (state === DOWN && prev < curr) {
      return false
    }
  }
  return state === DOWN
}

describe('corner cases', () => {
  it('should return false with an empty array', () => {
    const heights = []
    
    const result = checkJump(heights)
  
    expect(result).toBe(false)
  })

  it('should return false with a 1 element array', () => {
    const heights = [1]
    
    const result = checkJump(heights)
  
    expect(result).toBe(false)
  })

  it('should return false with a 2 element array', () => {
    const heights = [1, 2]
    
    const result = checkJump(heights)
  
    expect(result).toBe(false)
  })
})

describe('challenge tests', () => {
  it('should do second test of the challenge [1, 3, 8, 5, 2]', () => {
    const heights = [1, 3, 8, 5, 2]
    
    const result = checkJump(heights)
  
    expect(result).toBe(true)
  })
  
  
  it('should do second test of the challenge [1, 7, 3, 5]', () => {
    const heights = [1, 7, 3, 5]
  
    const result = checkJump(heights)
  
    expect(result).toBe(false)
  })
})

describe('additional tests', () => {
  it('should return false if its only ascending', () => {
    const heights = [1, 2, 3, 4, 5]

    const result = checkJump(heights)

    expect(result).toBe(false)
  })

  it('should return false if its only descending', () => {
    const heights = [5, 4, 3, 2, 1]

    const result = checkJump(heights)

    expect(result).toBe(false)
  })
  
  it('should return false if its completely flat', () => {
    const heights = [5, 5, 5, 5, 5]

    const result = checkJump(heights)

    expect(result).toBe(false)
  })

  it('should run with flat path parts', () => {
    const heights = [1, 2, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3, 2, 2, 1]

    const result = checkJump(heights)

    expect(result).toBe(true)
  })
})
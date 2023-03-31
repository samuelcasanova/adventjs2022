function fitsInOneBox(boxes) {
  const sortedBoxes = sortBoxes(boxes)
  return !sortedBoxes.some((currBox, i) => {
    return i > 0 && 
      (sortedBoxes[i-1].l >= currBox.l ||
        sortedBoxes[i-1].w >= currBox.w ||
        sortedBoxes[i-1].h >= currBox.h)
  })
}

const sortBoxes = (boxes) => {
  return [...boxes].sort((boxA, boxB) => {
    return (boxA.l < boxB.l || 
        boxA.w < boxB.w || 
        boxA.h < boxB.h) 
      ? -1 
      : 1
  })
}

it('should be able to sort boxes by size', () => {
  const boxes = [
    { l: 2, w: 2, h: 3 },
    { l: 2, w: 2, h: 2 },
    { l: 1, w: 2, h: 1 },
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 }
  ]

  const sortedBoxes = sortBoxes(boxes)
  expect(sortedBoxes).toHaveLength(5)
  expect(sortedBoxes).not.toBe(boxes)
  expect(sortedBoxes[0].l).toBe(1)
  expect(sortedBoxes[1].l).toBe(1)
  expect(sortedBoxes[1].w).toBe(2)
  expect(sortedBoxes[2].h).toBe(2)
})

it('should return true if theres only a single box', () => {
  const boxes = [
    { l: 1, w: 1, h: 1 }
  ]

  expect(fitsInOneBox(boxes)).toBeTruthy() 
})

it('should return true if a box with smaller length fits into another', () => {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
  ]

  expect(fitsInOneBox(boxes)).toBeTruthy()
})

it('should return false if a box doesnt fits into another for its length', () => {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 1, w: 2, h: 2 }
  ]

  expect(fitsInOneBox(boxes)).toBeFalsy()
})

it('should return false if a box doesnt fits into another for its width', () => {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 1, h: 2 }
  ]

  expect(fitsInOneBox(boxes)).toBeFalsy()
})

it('should return false if a box doesnt fits into another for its heigth', () => {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 1 }
  ]

  expect(fitsInOneBox(boxes)).toBeFalsy()
})

it('should return false if a box doesnt fits into another for width', () => {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ]

  expect(fitsInOneBox(boxes)).toBeFalsy()
})

it('should return true if all boxes fit into others', () => {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]

  expect(fitsInOneBox(boxes)).toBeTruthy()
})

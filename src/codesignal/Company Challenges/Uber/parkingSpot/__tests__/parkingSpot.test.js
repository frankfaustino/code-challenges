const parkingSpot = require('../parkingSpot')

describe('codesignal: Uber — parkingSpot', () => {
  test('One', () => {
    const carDimensions = [3, 2]
    const parkingLot = [[1,0,1,0,1,0],
                        [0,0,0,0,1,0],
                        [0,0,0,0,0,1],
                        [1,0,1,1,1,1]]
    const luckySpot = [1, 1, 2, 3]
    expect(parkingSpot(carDimensions, parkingLot, luckySpot)).toBe(true)
  })
  test('Two', () => {
    const carDimensions = [3, 2]
    const parkingLot = [[1,0,1,0,1,0],
                        [1,0,0,0,1,0],
                        [0,0,0,0,0,1],
                        [1,0,0,0,1,1]]
    const luckySpot = [1, 1, 2, 3]
    expect(parkingSpot(carDimensions, parkingLot, luckySpot)).toBe(false)
  })
  test('Three', () => {
    const carDimensions = [4, 1]
    const parkingLot = [[1,0,1,0,1,0],
                        [1,0,0,0,1,0],
                        [0,0,0,0,0,1],
                        [1,0,0,0,1,1]]
    const luckySpot = [0, 3, 3, 3]
    expect(parkingSpot(carDimensions, parkingLot, luckySpot)).toBe(true)
  })
  test('Four', () => {
    const carDimensions = [2, 1]
    const parkingLot = [[1,0,1],
                        [1,0,1],
                        [1,1,1]]
    const luckySpot = [0, 1, 1, 1]
    expect(parkingSpot(carDimensions, parkingLot, luckySpot)).toBe(true)
  })
  test('Five', () => {
    const carDimensions = [4, 2]
    const parkingLot = [[0,0,0,1],
                        [0,0,0,0],
                        [0,0,1,1]]
    const luckySpot = [0, 0, 1, 3]
    expect(parkingSpot(carDimensions, parkingLot, luckySpot)).toBe(false)
  })
  test('Six', () => {
    const carDimensions = [7, 2]
    const parkingLot = [[0,1,0],
                        [0,0,0],
                        [0,0,0],
                        [0,0,0],
                        [0,0,0],
                        [0,0,0],
                        [0,0,0],
                        [0,0,0],
                        [0,0,0]]
    const luckySpot = [1, 0, 7, 1]
    expect(parkingSpot(carDimensions, parkingLot, luckySpot)).toBe(true)
  })
  test('Seven', () => {
    const carDimensions = [5, 3]
    const parkingLot = [[1,1,1,1,1,0,1,1,1,1],
                        [0,1,0,0,1,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,1,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,1],
                        [0,0,0,0,0,0,0,0,1,0],
                        [0,0,1,0,0,0,0,0,0,0],
                        [1,0,0,0,0,0,0,0,0,0]]
    const luckySpot = [1, 3, 5, 5]
    expect(parkingSpot(carDimensions, parkingLot, luckySpot)).toBe(false)
  })
  test('Eight', () => {
    const carDimensions = [2, 1]
    const parkingLot = [[1,0,1],
                        [1,0,1],
                        [1,1,1]]
    const luckySpot = [1, 1, 2, 1]
    expect(parkingSpot(carDimensions, parkingLot, luckySpot)).toBe(false)
  })
  test('Nine', () => {
    const carDimensions = [2, 1]
    const parkingLot = [[1,1,1],
                        [1,0,1],
                        [1,0,1]]
    const luckySpot = [0, 1, 1, 1]
    expect(parkingSpot(carDimensions, parkingLot, luckySpot)).toBe(false)
  })
  test('Ten', () => {
    const carDimensions = [2, 1]
    const parkingLot = [[1,1,1,1],
                        [1,0,0,0],
                        [1,0,1,0]]
    const luckySpot = [2, 1, 2, 2]
    expect(parkingSpot(carDimensions, parkingLot, luckySpot)).toBe(false)
  })
  test('Eleven', () => {
    const carDimensions = [2, 1]
    const parkingLot = [[1,1,1,1],
                        [1,0,0,0],
                        [1,0,1,0]]
    const luckySpot = [1, 2, 1, 3]
    expect(parkingSpot(carDimensions, parkingLot, luckySpot)).toBe(true)
  })
  test('Twelve', () => {
    const carDimensions = [7, 2]
    const parkingLot = [[0,0,0,0,0,0,0,0],
                        [1,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0]]
    const luckySpot = [1, 1, 2, 7]
    expect(parkingSpot(carDimensions, parkingLot, luckySpot)).toBe(true)
  })
})
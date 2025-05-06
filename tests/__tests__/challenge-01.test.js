import { calculateBMI } from '../../udemy-challenges/challenge-01.js'

test('calculates correct BMI for Mark', () => {
    expect(calculateBMI(78, 1.69).toFixed(2)).toBe('27.31')
})
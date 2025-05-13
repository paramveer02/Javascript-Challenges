import { expect, jest } from '@jest/globals';
import { getScorersMap } from "../../udemy-challenges/challenge-12.js";

test('getScorersMap correctly counts goals per player', () => {
    const mockScored = ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'];
    const expected = {
        Lewandowski: 2,
        Gnarby: 1,
        Hummels: 1,
    };

    expect(getScorersMap(mockScored)).toEqual(expected);
})
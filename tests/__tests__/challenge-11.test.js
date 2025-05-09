import { jest } from '@jest/globals';

import {
    printGoals,
    players1,
    players2,
    gk,
    fieldPlayers,
    allPlayers,
    players1Final,
    team1,
    draw,
    team2,
    game,
} from '../../udemy-challenges/challenge-11.js';


test('players1 and players2 contain correct team players', () => {
    expect(players1).toBe(game.players[0]);
    expect(players2).toBe(game.players[1]);
});

test('gk and fieldPlayers destructure correctly from players1', () => {
    expect(gk).toBe('Neuer');
    expect(fieldPlayers.length).toBe(10);
    expect(fieldPlayers).toEqual(players1.slice(1));
});

test('allPlayers combines both teams', () => {
    expect(allPlayers).toEqual([...players1, ...players2])
});

test('players1Final adds substitutes correctly', () => {
    expect(players1Final).toEqual([...players1, 'Thiago', 'Coutinho', 'Perisic']);
});

test('odds are destructured correctly', () => {
    expect(team1).toBe(game.odds.team1);
    expect(draw).toBe(game.odds.x);
    expect(team2).toBe(game.odds.team2);
});

test('printGoals correctly counts arguments passed', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
    expect(consoleSpy).toHaveBeenCalledWith('Player-1: Davies');
    expect(consoleSpy).toHaveBeenCalledWith('Player-2: Muller');
    expect(consoleSpy).toHaveBeenCalledWith('Player-3: Lewandowski');
    expect(consoleSpy).toHaveBeenCalledWith('Player-4: Kimmich');
    expect(consoleSpy).toHaveBeenCalledWith('Total Goals Scored: 4\n');

    consoleSpy.mockRestore(); // 🧼 Clean up
})
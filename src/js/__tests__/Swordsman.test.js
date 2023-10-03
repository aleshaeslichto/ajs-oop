import Swordsman from "../characters/Swordsman";

test ('create Swordsman', () => {
    const res = new Swordsman('Swordsman');

    expect(res).toEqual({
        name: 'Swordsman',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});
import Zombie from "../characters/Zombie";

test ('create Zombie', () => {
    const res = new Zombie('Zombie');

    expect(res).toEqual({
        name: 'Zombie',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});
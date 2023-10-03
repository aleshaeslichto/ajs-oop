import Magician from "../characters/Magician";

test ('create Magician', () => {
    const res = new Magician('Magician');

    expect(res).toEqual({
        name: 'Magician',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});
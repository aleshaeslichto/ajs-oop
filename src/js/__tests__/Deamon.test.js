import Daemon from "../characters/Daemon";

test ('create Daemon', () => {
    const res = new Daemon('Daemon');

    expect(res).toEqual({
        name: 'Daemon',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});
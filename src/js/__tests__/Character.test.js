import Character from "../characters/Character";

test("Create character", () => {
  const res = new Character("Olly", "Daemon");

  res.attack = 10;
  res.defence = 35;

  expect(res).toEqual({
    name: "Olly",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 35,
  });
});

test("Level up", () => {
  const res = new Character("Dan", "Zombie");

  res.attack = 40;
  res.defence = 10;

  expect(res).toEqual({
    name: "Dan",
    type: "Zombie",
    health: 100,
    level: 3,
    attack: 40,
    defence: 10,
  });
});

test("Damage test", () => {
  const res = new Character("Isaac", "Zombie");
  res.attack = 40;
  res.defence = 10;
  res.damage(22);
  expect(res).toEqual({
    name: "Glen",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test("Type test", () => {
  expect(() => {
    const res = new Character("Lola", "Demon");
    res.attack = 40;
    res.defence = 20;
  }).toThrow("Неверный тип персонажа");
});

test("Name test", () => {
  expect(() => {
    const res = new Character("Li", "Daemon");
    res.attack = 40;
    res.defence = 10;
  }).toThrow("Неверное имя персонажа");
});

test("Incorrect level up", () => {
  const res = new Character("Roby", "Magician");

  res.attack = 10;
  res.defence = 40;
  res.health = 0;

  expect(() => {
    res.levelUp();
  }).toThrow("Нельзя получить уровень, вы мертвы!");
});

test("Incorrect damage", () => {
  const res = new Character("Peter", "Undead");

  res.attack = 25;
  res.defence = 25;
  res.health = 0;
  res.damage(10);

  expect(res).toEqual({
    name: "Peter",
    type: "Undead",
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  }).toThrow("Нельзя нанести урон, вы мертвы!");
});

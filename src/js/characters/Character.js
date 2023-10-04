const types = [
  "Bowerman",
  "Swordsman",
  "Magician",
  "Daemon",
  "Undead",
  "Zombie",
];

export default class Character {
  constructor(name, type) {
    if (!types.includes(type)) {
      throw new Error("Неизвестный тип существа");
    } else {
      this.name = name;
    }
    if (name.length <= 2 || name.length > 10) {
      throw new Error("Имя должно содержать от 2 до 10 символов");
    } else {
      this.type = type;
    }

    this.name = name;
    this.type = type;
    this.level = 1;
    this.health = 100;
  }

  levelUp() {
    if (this.health > 0) {
      this.level++;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error("Нельзя получить уровень мертвому персонажу!");
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

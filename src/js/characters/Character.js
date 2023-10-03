const types = [
'Bowerman',
'Swordsman',
'Magician',
'Daemon',
'Undead',
'Zombie',
];

export default class Character {
    constructor(name, type) {
        if (!types.includes(type))
        throw new Error();
        if (name.length <= 2 || name.length > 10)
        throw new Error ();

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
            console.error('Нельзя получить уровень мертвому персонажу')
        }
    }

    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}
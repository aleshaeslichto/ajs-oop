import Character from '../characters/Character';


describe('Character', () => {

  describe('constructor', () => {

    it('should create character with valid params', () => {
      const char = new Character('John', 'Bowerman');

      expect(char.name).toBe('John');
      expect(char.type).toBe('Bowerman');
    });

    it('should throw on invalid type', () => {
      expect(() => {
        new Character('John', 'Invalid');
      }).toThrowError('Неизвестный тип существа');
    });

    it('should throw on invalid name', () => {
      expect(() => {
        new Character('J', 'Bowerman');
      }).toThrowError('Имя должно содержать от 2 до 10 символов');
    });

  });

  describe('levelUp', () => {

    it('should throw error for dead player', () => {
      const char = new Character('John', 'Bowerman');
      char.health = 0;

      expect(() => char.levelUp())
        .toThrowError('Нельзя получить уровень мертвому персонажу!');
    });

  });

  describe('damage', () => {

    it('should reduce health with defence factor', () => {
      const char = new Character('John', 'Bowerman');
      char.health = 100;
      char.defence = 10;
      char.damage(50);

      expect(char.health).toBeLessThan(100);
      expect(char.health).toBeGreaterThan(0);
    });

    it('should not reduce if health is 0', () => {
      const char = new Character('John', 'Bowerman');
      char.health = 0;

      char.damage(50);

      expect(char.health).toBe(0);
    });

  });

});
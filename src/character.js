class Character {
  constructor({ name, health = 100, attack = 50, defence = 10, level = 1 }) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defence = defence;
    this.level = level;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error("Cannot level up a dead character.");
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    const damagePoints = points * (1 - this.defence / 100);
    this.health -= damagePoints;
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

module.exports = Character;

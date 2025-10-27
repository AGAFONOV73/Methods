const Character = require("../src/character");

describe("Character class", () => {
  let hero;
  beforeEach(() => {
    hero = new Character({
      name: "Hero",
      health: 100,
      attack: 50,
      defence: 10,
      level: 1,
    });
    hero.health = 50; 
  });

  test("should increase level, attack, and defence when levelUp is called with health > 0", () => {
    expect(() => hero.levelUp()).not.toThrow();
    expect(hero.level).toBe(2);
    expect(hero.attack).toBeCloseTo(60, 5);
    expect(hero.defence).toBeCloseTo(12, 5);
    expect(hero.health).toBe(100);
  });

  test("should increase level, attack, defence, and reset health when levelUp is called", () => {
    
    hero.health = 50;
    hero.levelUp();
    expect(hero.level).toBe(2);
    expect(hero.attack).toBeCloseTo(60, 5);
    expect(hero.defence).toBeCloseTo(12, 5);
    expect(hero.health).toBe(100);
  });

  test("should throw error when levelUp is called with health=0", () => {
    hero.health = 0;
    expect(() => hero.levelUp()).toThrow("Cannot level up a dead character.");
  });

  test("damage method reduces health correctly", () => {
    const initialHealth = hero.health;
    const damagePoints = 50;
    const expectedDamage = damagePoints * (1 - hero.defence / 100);
    hero.damage(damagePoints);
    expect(hero.health).toBeCloseTo(initialHealth - expectedDamage, 5);
  });
  test("damage method does not reduce health below zero", () => {
    hero.damage(200); 
    expect(hero.health).toBe(0);
  });
});

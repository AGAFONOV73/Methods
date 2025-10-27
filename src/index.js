const Character = require('./character');

const char = new Character({ name: 'Hero' });
console.log(char);
char.damage(20);
console.log(char);
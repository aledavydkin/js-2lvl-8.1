import Character from './characters/character';

const test = new Character();
const newCharacter = { username: 'Сашка' };

test.add(newCharacter);

test.add(44);
test.addAll(1, 2, 3, 4, 1);

test.toArray();

console.log(test);

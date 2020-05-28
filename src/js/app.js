import Team from './characters/team';

const test = new Team();
const newTeam = { username: 'Сашка' };

test.add(newTeam);

test.add(44);
test.addAll(1, 2, 3, 4, 1);

test.toArray();

console.log(test);

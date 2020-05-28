import {
  describe, expect,
} from '@jest/globals';
import Team from '../characters/team';

describe('Создание уникальных персонажей', () => {
  test('Создание уникального персонажа', () => {
    const received = new Team();
    received.add({ name: 'Сашка' });

    expect(received.toArray())
      .toEqual([{ name: 'Сашка' }]);
  });

  test('Проверка на создание существующего игрока же игрока', () => {
    const received = new Team();
    const newTeam = { username: 'Санька' };
    received.add(newTeam);

    expect(() => { received.add(newTeam); })
      .toThrowError(new Error('Такой персонаж уже есть'));
  });

  test('Создание одновременно трех персонажей', () => {
    const received = new Team();
    received.addAll({ name: 'Сашка' }, { name: 'Санек' }, { name: 'Александр' });

    expect(received.toArray())
      .toEqual([{ name: 'Сашка' }, { name: 'Санек' }, { name: 'Александр' }]);
  });
});

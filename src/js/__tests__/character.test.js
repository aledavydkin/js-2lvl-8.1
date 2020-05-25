import {
  describe, expect,
} from '@jest/globals';
import Character from '../characters/character';

describe('Создание уникальных персонажей', () => {
  test('Создание уникального персонажа', () => {
    const received = new Character();
    received.add({ name: 'Сашка' });

    expect(received.toArray())
      .toEqual([{ name: 'Сашка' }]);
  });

  test('Проверка на создание существующего игрока же игрока', () => {
    const received = new Character();
    const newCharacter = { username: 'Санька' };
    received.add(newCharacter);

    expect(() => { received.add(newCharacter); })
      .toThrowError(new Error('Такой персонаж уже есть'));
  });

  test('Создание одновременно трех персонажей', () => {
    const received = new Character();
    received.addAll({ name: 'Сашка' }, { name: 'Санек' }, { name: 'Александр' });

    expect(received.toArray())
      .toEqual([{ name: 'Сашка' }, { name: 'Санек' }, { name: 'Александр' }]);
  });
});

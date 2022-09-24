import { classNames } from './classNames';

describe('classNames', () => {
  test('с единственным классом', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('с доп классами в массиве', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('с модами', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames(
      'someClass',
      {
        hovered: true,
        scrollable: true,
      },
      ['class1', 'class2'],
    )).toBe(expected);
  });

  test('с одним отключенным модом', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      {
        hovered: true,
        scrollable: false,
      },
      ['class1', 'class2'],
    )).toBe(expected);
  });

  test('с undefined модом', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      {
        hovered: true,
        scrollable: undefined,
      },
      ['class1', 'class2'],
    )).toBe(expected);
  });
});

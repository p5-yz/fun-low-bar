const _ = require('../lowbar');

describe('#identity', () => {
  test('returns the value passed as an argument', () => {
    expect(_.identity(3)).toBe(3);
    expect(_.identity('hello')).toBe('hello');
    expect(_.identity(true)).toBe(true);
  });
  test('returns a reference to the same reference type passed as an argument', () => {
    const arr = [];
    expect(_.identity(arr)).toEqual(arr);
  });
});

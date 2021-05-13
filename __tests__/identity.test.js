const _ = require('../lowbar');

describe('#identity', () => {
  test('returns the value passed as an argument', () => {
    expect(_.identity(3)).toBe(3);
    expect(_.identity('hello')).toBe('hello');
    expect(_.identity(true)).toBe(true);
  });
  test('return value has the same reference when passed an array or object', () => {
    const arr = [];
    expect(_.identity(arr)).toBe(arr);
    const obj = {};
    expect(_.identity(obj)).toBe(obj);
  });
});

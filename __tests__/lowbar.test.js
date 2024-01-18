const { identity, fromPairs } = require('../lowbar');

// don't forget to export and import each of your new functions!

describe('identity', () => {
  test('returns the value passed as an argument', () => {
    expect(identity(3)).toBe(3);
    expect(identity('hello')).toBe('hello');
    expect(identity(true)).toBe(true);
  });
  test('return value has the same reference when passed an array or object', () => {
    const arr = [];
    expect(identity(arr)).toBe(arr);
    const obj = {};
    expect(identity(obj)).toBe(obj);
  });
});

describe('recieve an array of arrays and output a new object containing the key value pairs of the sub arrays', () => {
  test('Should return an object', () => {
    // arrange
    const input = [[]]
    // act
    const returnValue = fromPairs(input);
    // assert
    expect(typeof returnValue === 'object' && !Array.isArray(returnValue)).toBe(true);
  });
  test('Should return an object containing the correct key value pair for a single array', () => {
    // arrange
    const input = [['a', 1]];
    // act
    const returnValue = fromPairs(input);
    // assert
    expect(returnValue).toEqual({a: 1});
  });
  test('should return correct output if given two arrays', () => {
    // arrange
    const input = [['a', 1], ['b', 2]];
    // act
    const returnValue = fromPairs(input);
    // assert
    expect(returnValue).toEqual({a: 1, b: 2});
  });
  test('Should not mutate input array', () => {
    // arrange
    const input = [['a', 1], ['b', 2]];
    const inputRefrence = [['a', 1], ['b', 2]];
    // act
    fromPairs(input);
    // assert
    expect(input).toEqual(inputRefrence);
  });
});
const { identity, fromPairs, sumBy } = require('../lowbar');

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

// describe('recieve an array of arrays and output a new object containing the key value pairs of the sub arrays', () => {
//   test('Should return an object', () => {
//     // arrange
//     const input = [[]]
//     // act
//     const returnValue = fromPairs(input);
//     // assert
//     expect(typeof returnValue === 'object' && !Array.isArray(returnValue)).toBe(true);
//   });
//   test('Should return an object containing the correct key value pair for a single array', () => {
//     // arrange
//     const input = [['a', 1]];
//     // act
//     const returnValue = fromPairs(input);
//     // assert
//     expect(returnValue).toEqual({a: 1});
//   });
//   test('should return correct output if given two arrays', () => {
//     // arrange
//     const input = [['a', 1], ['b', 2]];
//     // act
//     const returnValue = fromPairs(input);
//     // assert
//     expect(returnValue).toEqual({a: 1, b: 2});
//   });
//   test('Should not mutate input array', () => {
//     // arrange
//     const input = [['a', 1], ['b', 2]];
//     const inputRefrence = [['a', 1], ['b', 2]];
//     // act
//     fromPairs(input);
//     // assert
//     expect(input).toEqual(inputRefrence);
//   });
// });
describe('recieves an array and a function and returns the sum of the array after being passed to the function', () => {
  test('Should return a number', ()=> {
  //arrange
  const input = []
  const callback = identity
  //act
  const returnValue = sumBy(input, callback)
  // assert
  expect(typeof returnValue).toEqual('number')
  })

  test('Test the function passed in is being called', () => {
    //arrange
    const mockCallback = jest.fn()
    const input = []
    //act
    const returnValue = sumBy(input, mockCallback)
    // assert
    expect(mockCallback).toHaveBeenCalled()
    })

    test('Should returns same values when passed a single value', () => {
      //arrange
      const mockCallback = identity
      const input = [1]
      //act
      const returnValue = sumBy(input, mockCallback)
      // assert
      expect(returnValue).toEqual(1)
    })

    test('Should returns the callback n times on a single value', () => {
      //arrange
      const mockCallback = jest.fn()
      const input = [1,2,3]
      //act
      const returnValue = sumBy(input, mockCallback)
      // assert
      expect(mockCallback).toHaveBeenCalledTimes(3)
    })

    test('Should returns the sum of all values in an array', () => {
      //arrange
      const mockCallback = identity
      const input = [1,2,3]
      //act
      const returnValue = sumBy(input, mockCallback)
      // assert
      expect(returnValue).toEqual(6)
    })

})
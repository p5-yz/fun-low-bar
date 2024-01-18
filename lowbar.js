function identity(x) {
  return x;
}

function fromPairs(arr) {
  let output = {};
  for (let i = 0; i < arr.length; i++){
    output[arr[i][0]] = arr[i][1];
  }
  return output;
}

function sumBy(array, callback){
  let sum = 0
  if (array.length === 0){
    callback()
    return 0
  }
  for(let i in array){
    sum += callback(array[i])
  }
  return sum // satisfie previous test so doesnt fail!
}

function maxBy(input, callback) {
  let highest = input[0]; // tracks the highest item in the array
  let highestValue = 0 // tracks the highest value in the array
  for (let i = 0; i < input.length; i++){ //loops through the array
    let callbackValue = callback(input[i]) //tracks the current items post function value
    if (callbackValue > highestValue){ // if the post function value is greater than the current highest
      highestValue = callbackValue; // set the highest value to be the current items value
      highest = input[i]; // sets the highest item as the current item
    } 
  };

  return highest; // returns the highest item
}

module.exports = { identity, fromPairs, sumBy, maxBy };

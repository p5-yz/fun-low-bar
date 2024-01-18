function identity(x) {
  return x;
}

function fromPairs(arr) {
  let output = {};
  for (let i = 0; i < arr.length; i++){
    output[arr[i][0]] = arr[i][1];
  }
  console.log(output);
  return output;
}

module.exports = { identity, fromPairs };

const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc,e)=>acc+e,0)
};

const multiply = function(arr) {
  // use multiplication in the reduce callback
  return arr.reduce((acc,e)=>acc*e, 1)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(x) {
	// compute the factorial of x
  // use an array to store the results
  let results = new Array()
  results[0] = 1;

  for (let i=1; i<=x; i++) {
    results[i] = results[i-1] * i;
  }
  console.log(results)
  return results[results.length - 1]
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

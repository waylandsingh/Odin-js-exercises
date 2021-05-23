const sumAll = function(n,m) {
    // returns the sum of all numbers between n and m (inclusive)
    // order doesn't matter

    // return Error for negative numbers, non numbers
    const negNumbers = (n < 0) || (m < 0)
    const nonNumbers = nonInteger(n) || nonInteger(m)

    if (negNumbers || nonNumbers) {
        return 'ERROR'
    }

    // perform summation
    let s = 0

    for (let i=Math.min(n,m); i<=Math.max(n,m); i++) {
        s += i
    }

    return s

    // helper function to check if a value is NOT an integer
    function nonInteger(val) {
        return !(Number.isInteger(val))
    }

};

module.exports = sumAll;

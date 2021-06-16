const fibonacci = function(num) {
    // check that the value can be repd as a positive number
    let n = parseInt(num)

    if (n < 0){
        return "OOPS"
    }

    let fibs = [0,1];

    for (let i = 2; i <= num; i++){
        fibs[i] = fibs[i-1] + fibs[i-2]
    }

    return fibs[fibs.length-1]

};

module.exports = fibonacci;


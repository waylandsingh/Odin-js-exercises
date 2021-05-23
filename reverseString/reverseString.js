const reverseString = function(str) {
    let returnStr = ''

    // code here to reverse the string
    // break the string into an array of letters
    let letterArray = str.split('')

    // iterate backwards through the array and append to returnStr
    letterArray.reverse().forEach(element => {
        returnStr += element
    });

    return returnStr
};

reverseString('hello');


module.exports = reverseString;

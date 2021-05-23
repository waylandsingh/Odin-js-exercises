const repeatString = function(str, n) {
    if (n<0) {return 'ERROR'}
    returnString = ''
    for (let i=0; i<n; i++) {
        returnString += str
    }
    return returnString
};

module.exports = repeatString;

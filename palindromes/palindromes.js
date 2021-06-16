const palindromes = function (s) {
    // assuming clean input of a string here
    // remove punctuation and spaces in the string
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const noPunctuation = s.replace(regex, '');
    let cleanwords = noPunctuation.toUpperCase().split('').filter((el) => el!=' ')

    // iterate to the middle of the string
    for (let i=0; i < Math.ceil(cleanwords.length/2); i++){
    //check if the 'mirror' element in the array matches

    // if not, return false
    if (cleanwords[i] !== cleanwords[cleanwords.length - i - 1]) {
        return false
        }
    }
    return true
};

module.exports = palindromes;

tf = palindromes('racecar {{!')
console.log(tf)
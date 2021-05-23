const leapYears = function(year) {
    // determine if given year is leap year
    // year must be divisble by 4, but not divisible by 100 unless divisible by 400

    let isLeap = false;

    // if year divisible by 4...
    if (year%4 == 0) {
        // ... and not divisible by 100, it is leap year
        if (year%100 != 0) { return true}
        // ... is divisble by 100 and is divisible by 400
        else if (year%400 == 0) {return true}
        // ... is divisble by 100 and not 400
        else {return false}
    } 
    // if not, it's not a leap year
    return false;
};

module.exports = leapYears;

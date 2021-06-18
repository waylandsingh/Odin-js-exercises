const findTheOldest = function(people) {
    // find the current year
    const date = new Date();
    const year = date.getFullYear()

    people.sort((a,b) => {
        // return negative if a is younger than b
        const ageA = a.yearOfDeath||Infinity - a.yearOfBirth
        const ageB = b.yearOfDeath||Infinity - b.yearOfBirth
        return (ageA<ageB) ? -1 : 1
    })

    // mentally simpler approach: map to age, alive, whatever

    // pull from the map to check things out

    console.log(people)
    
    return people[people.length - 1]
};

module.exports = findTheOldest;

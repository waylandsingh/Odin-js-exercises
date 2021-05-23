const removeFromArray = function(arr,) {
    

    console.log(arguments)

    // initalize the modified array the same as the input
    let modifiedArray = arguments['0']

    // iterate over the remaining arguments
    for (let i=1; i<arguments.length; i++) {
        //check for matches and 
        modifiedArray = singleRemove(modifiedArray, arguments[i])
        
        //remove from array if dound
    }

    return modifiedArray

    // remove a single element from an array
    function singleRemove(arr, val) {
        return arr.filter(element => {
            return element !== val;
        });

    
};

}

console.log(removeFromArray([1,2,3,4], 3, 2))
module.exports = removeFromArray;

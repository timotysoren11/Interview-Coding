// Removing the first element 
// shift() is used to remove first element
// it can be done without it - slice(argument)

function RemoveElement(arr) {
    return arr.slice(1);
}

console.log(RemoveElement([1,2,3]));
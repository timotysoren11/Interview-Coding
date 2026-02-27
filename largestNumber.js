//Find the largest number in an array
// Assuming that first element is the largest
// Then loop through each element, if larger number is found then
// updates the largest number

function isLargestNumber(arr) {
    // suppose first element is the largest
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > largest) {
            //updates the largest number if found
            largest = arr[i];
        }
    }
    return largest;
}

console.log(isLargestNumber([99,5,3,100,10]));
// Program to find the sum of array
// assume sum = 0
// then we loop through array and add each element 
// store them in sum

function sumArray(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(sumArray([1,2,3,4]));
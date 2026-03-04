// Program to print the frequency of of element in array
// how many times a element repeat or appears in the list of array

function frequency(arr) {
    let freq = {};

    for (let i =0; i<arr.length; i++){

        //current element
        let element = arr[i];

        // checking if the element exist in the object or not
        if (freq[element]) {
            freq[element]++;
        }
        else {
            freq[element] = 1;
        }
    }
    return freq;
}

let arr = [1,2,2,3,4]
console.log(frequency(arr));
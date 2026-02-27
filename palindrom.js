// Program to check whether a string is a palindrome string
// A word that reads the same word from forward and backward
// Need to reverse a string and compare it to the original word

function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("GFG"));
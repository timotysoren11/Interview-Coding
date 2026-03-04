// Checking prime or not
// Prime number means it should be divided by itself and 1
// then its a prime number

function primeNumber(num) {
    if (num  <= 1){
        return false;
    }
    for (let i=2; i<num; i++) {
        if (num%i==0){
            return false;
        }
    }
    return true;
}

console.log(primeNumber(7));
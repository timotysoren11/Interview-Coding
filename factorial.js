// To find the factorial of the number
// the product of all the positive integers less than or equal to n
// 5 = 5*4*3*2*1

function factorial(n) {
     let num=1;

    for (let i=1; i<=n; i++) {
        num = num * i;
    }

    return num;
}

console.log(factorial(5));
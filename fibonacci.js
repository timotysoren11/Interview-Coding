// Program to print Fibonacci sequence up to n terms
// Starting from 0 and 1 
// the numbers which comes after 1 is the some of last two numbers
// 0,1,1(0+1),2(1+1),3(1+2),5(2+3),8(3+5).....so on 

function fibonacci(n) {
    let num1=0, num2=1, nextNum;

    for (let i =1; i<=n; i++){
        console.log(num1);
        nextNum = num1 + num2;

        num1 = num2;
        num2 = nextNum;
    }

    return num1;
}

console.log(fibonacci(7));
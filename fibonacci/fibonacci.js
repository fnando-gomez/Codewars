/*
02/09/2020

From [The Coding Interview](https://www.thecodinginterview.com) | Coding interview question from Netflix. This question is often asked by Netflix in junior 
& intermediate coding interviews: Write a function *fib()* that takes an integer *n* and returns the *nth* Fibonacci number.

Note: The Fibonacci series is a numerical series where each item is the sum of the two previous items. It starts off like this: *0,1,1,2,3,5,8,13,21...*
*/

function fib(fibNumber) {
    let fibArray = [0, 1]
    for (let i = 0; i <= fibNumber; i++) {
        numberOne = BigInt(fibArray[fibArray.length - 1]);
        numberTwo = BigInt(fibArray[fibArray.length - 2]);

        fibArray.push(numberOne + numberTwo);
    }//for
    console.log(fibArray[fibNumber]);//For visualization
    return fibArray[fibNumber];
}//fib

fib(155)
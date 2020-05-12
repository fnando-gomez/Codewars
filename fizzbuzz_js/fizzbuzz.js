/*
12/05/2020

Show a list that counts from 1 to 50 and based on the number of item print:
- Fizz if it's a multiple of 3,
- Buzz if it's a multiple of 5, and
- if multiple of both write FizzBuzz.

Note: This was asking during a technical interview to be implemented in React from scratch, did the JS version just for fun and before try in React. 

*/ 

function fizzbuzz(topNumber) {
    const number1 = 3
    const number2 = 5

    for (let i = 1; i <= topNumber; i++) {
        if (i % number1 == 0 && i % number2 == 0) {
            console.log("FizzBuzz")
        } else if (i % number1 == 0) {
            console.log("Fizz")
        } else if (i % number2 == 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }//if-else
    }//for
}//fizzbuzz

fizzbuzz(50000)
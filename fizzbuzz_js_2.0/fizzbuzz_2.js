/*
11/07/2020

Show a list that counts from 1 to 50 and based on the number of item print:
- Fizz if it's a multiple of 3,
- Buzz if it's a multiple of 5, and
- if multiple of both write FizzBuzz.

also:
- You can use only one "if"
- You can't use "else", "else if", "case" or a terniary operator

Note: This was asking during a technical interview to be implemented in React from scratch, did the JS version just for fun and before try in React. 

*/ 

function fizzbuzz(topNumber) {
    let listNumbers = [0];

    const mapOfOptions = {
        3: "Fizz",
        5: "Buzz",
        15: "FizzBuzz",
    };

    for (let i = 1; i <= topNumber; i++) {
        const fizz = (i % 3) * -1 + 3;
        const buzz = (i % 5) + 5;
        const fizzbuzz = fizz * buzz;
       
        const value = mapOfOptions[fizzbuzz] || mapOfOptions[fizz] || mapOfOptions[buzz] || i;
        listNumbers.push(value)
    }//for

    console.table(listNumbers)
    return listNumbers;
}//fizzbuzz



fizzbuzz(50)
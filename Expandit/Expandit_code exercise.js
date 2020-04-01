/*
31/03/2020

Expandit code exercise during a technical interview. 

Write a function that receives a string and return true if the pharentesis are
balanced, in case parentheses are not balanced it should return the index that breaks the balance.

Consider the following correctly balanced string of parentheses: 

- (()()()())
- (((())))
- (()((())()))
*/ 

function myFunction(input_string) {
    let newString = input_string.split(" ").join("")
    let count1 = 0
    let count2 = 0

    for (let i = 0; i < newString.length; i++) {
        if (newString[i] === "(") {
            count1++
        } else if (newString[i] === ")") {
            count2++
        }//if
    }//for

    let substIndex = (count1 == count2)
    let index = newString.length - (Math.abs(count1 - count2))

    if (substIndex) {
        console.log(`The parentheses are balanced, with ${count2} pair(s) of parentheses`)
        return true
    } else {
        console.log("The parentheses break at index= " + index)
    }//if
}
myFunction("((()))))")
myFunction("(())()")
myFunction("((()))()())")
myFunction("(()()()())()")
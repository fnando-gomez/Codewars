/*
12/10/2020
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

function findNumbersSum(number){
    const numArray = [10,15, 3, 7]; 

    for(let i = 0; i <= (numArray.length-2);i++){
        let num1 = numArray[i]; 
        console.log(num1+numArray[i+1])
        
    }
    
    console.log(numArray)

}


findNumbersSum(17)
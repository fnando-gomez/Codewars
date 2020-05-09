/*

Number of Decimal Digits - Codewars 01/04/2020 

Determine the total number of digits in the integer (n>=0) given as input to the function. 
For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. 
Be careful to avoid overflows/underflows.

All inputs will be valid.

*/

function digits(num){
    stringNumber = num.toString() 
    
    console.log(stringNumber.length)//Only for visual verification
    return stringNumber.length
}


digits(1234567890)
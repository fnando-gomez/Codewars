
/*05/10/2020
Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

let multipleNumber1 = 3;
let multipleNumber2 = 5;

function findSumMultiples(maxNumber) {
    let sumAcumulate = 0;
    for (let i = 1; i < maxNumber; i++) {
        if (i % multipleNumber1 == 0 || i % multipleNumber2 == 0) {
            sumAcumulate = sumAcumulate + i;
        }
    }
    console.log(sumAcumulate)

}

findSumMultiples(1000)

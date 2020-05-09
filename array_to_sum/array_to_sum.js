/*08/05/2020
Challenge of technical interview

Create a function that can add up every element in the array that can be parsed to a number.

test with: 
const arrayToSum = [1,2,'3',[45,'76',32,[4,78,0,'-45']],3,
[[true, false, 23, 45, [[[25,67,1,-687,34,[[[[45,52,100,
[[[33,25]]]],0.5]],3.45]]],78,2]]],[[0.05,'23.3',[45,32,
    'B','2', '45']], {}]]
*/


const arr = [1, 2, '3', [45, '76', 32, [4, 78, 0, '-45']], 3, [[true, false, 23, 45, [[[25, 67, 1, -687, 34, [[[[45, 52, 100, [[[33, 25]]]], 0.5]], 3.45]]], 78, 2]]], [[0.05, '23.3', [45, 32, 'B', '2', '45']], {}]]
const array = arr.join()
const newArr = array.split(",")
const numArr = []

function array_to_sum(arr) {
    for (let i = 0; i < newArr.length; i++) {
        if (!isNaN(newArr[i])) {
            numArr.push(parseInt(newArr[i]))
        }//if
    }//for
    
    //It's possible to use the reduce() method. But I'm not sure if I can use because of the indication to not use
    // "direct methods". So I use a simple for-loop to sum the final array. 

    let totalSum = 0;
    for (let i = 0; i < numArr.length; i++) {
        totalSum = totalSum + numArr[i]
    }//for
    console.log(totalSum)
    return totalSum
}// array_to_sum

array_to_sum(arr)
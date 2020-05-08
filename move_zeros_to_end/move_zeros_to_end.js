/*
08/05/2020
Codewars exercise
Move zeros to end

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/ 

var moveZeros = function (arr) {
    let newArr = []
    let zeroArr = []


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroArr.push(arr[i])
        } else {
            newArr.push(arr[i])
        }//if
    }//for

    arr = newArr.concat(zeroArr)
    
    console.log(arr)// Just for testig
    return arr

}//moveZeros

moveZeros(['a', 0, 'b', 'c', 'd', 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ])
// let limit = arr.length
// console.log(limit)

// for (let i = 0; i < limit; i++) {
//     if (arr[i] === 0) {
//         arr.push(0)
//         arr.splice(i, 1)
//     }
    
// }
// console.log(arr)//Just for testing
// return arr
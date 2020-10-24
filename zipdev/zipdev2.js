
/*
22/10/2020
Note: Don't be too hard, I coded this against the clock and in a different web platform as a part of a technical interview. I'll give the task of optimize this code to my future Me.

A word chain is a sequence of words in which every word except the first one starts with the last letter of the previous word. You are given a sequence of words. Output the lenght of the longest prefix of the sequence which forms a valid word chain. One-word chain is always valid. 
*/

function wordChain(input) {
    let stringInput = input;

    const stringToArray = stringInput.split("\n");
    let arrayToString = stringToArray.join("");

    let acum = 1;
    for (let i = 0; i <= arrayToString.length - 1; i++) {
        if (arrayToString[i] === arrayToString[i + 1]) {
            console.log(arrayToString[i], arrayToString[i + 1])//Visualization

            acum = acum + 1;
        }//if
    }//for
    console.log(acum);//Visualization
    return acum;
}//wordChain

// Test cases
wordChain("4\nthe\neagle\neats\nsnakes")
// wordChain("6\ndodgers\nsundae\nextremist\nthe\nbest\nteam")
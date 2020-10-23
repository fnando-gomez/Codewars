/*
22/10/2020
Note: Don't be too hard, I coded this against the clock and in a different web platform as a part of a technical interview. I'll give the task of optimize this code to my future Me.

You are given an integer N, followed by N lines of input (1<= N <= 100). Each line of input contains oner or several words separated with single spaces. Each word is a sequence of letters of English alphabet containing between 1 and 10 characters, inclusive. The total number of words in the input is between 1 and 100, inclusive.

Your task is to reverse the order or words in each line of input, while preserving the words themselves. The lines of your output should not have any trailing of leading spaces. 

Example: 

input
3
Hello World
Bye World
Useless World

output
World Hello
World Bye
Word Useless
*/
function reverseWord(input) {
    let stringInput = input;

    const stringToArray = stringInput.split("\n");

    const middleArray = [];
    for (let i = 1; i <= stringToArray.length - 1; i++) {
        middleArray.push(stringToArray[i]);
    }//for

    const arrayReversed = [];
    for (let i = 0; i <= middleArray.length - 1; i++) {
        const wordToArray = middleArray[i].split(" ");
        arrayReversed.push(wordToArray.reverse());
    }//for

    let finalString = ""
    for (let i = 0; i <= arrayReversed.length - 1; i++) {
        let wordsReversed = arrayReversed[i].join(" ");
        finalString = finalString + "\n" + wordsReversed;
    }//for
    console.log(finalString)
    return finalString;

}//reverseWord

// Test case
// reverseWord("3\nHello World\nBye World\nUseless Word")
reverseWord("4\nLet's go Dodgers\nhope this year\nis our year\nto win the WS")

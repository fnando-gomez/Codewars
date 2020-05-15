
/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s){

    let newStr = s[0].toLocaleUpperCase()

    for (let i = 1; i < s.length; i++) {
        newStr += "-" + s[i].toLocaleUpperCase()
        for (let j = 0; j < i; j++) {
            newStr += s[i].toLowerCase()
        }
    }//for
    console.log(newStr)
    return newStr
}//accum

accum("Ekaterina")


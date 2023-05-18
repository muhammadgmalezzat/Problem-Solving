const str = "hello there!";

const maxChar = function (str) {
const chars = {};
let maxCharNumber = 0;
let maxchar=""
    for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
    if (chars[char] > maxCharNumber) {
        maxCharNumber = chars[char]
        maxchar=char
    }
    }
    return maxchar
}

console.log(maxChar(str))






//console.log(chars)
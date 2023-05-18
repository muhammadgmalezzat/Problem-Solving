/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let onlyLettersArray = s.toLowerCase()
        .split('')
        .filter(char => /[a-zA-Z0-9]/.test(char));
    let str=onlyLettersArray.join("")
    let rev = onlyLettersArray.reverse().join("")
    
    console.log(str)
    console.log(rev)
    return str === rev;
};
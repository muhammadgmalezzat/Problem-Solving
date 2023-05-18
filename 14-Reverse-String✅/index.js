/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var firstChar=0;
    var lastChar = s.length-1;
    
    while (firstChar < lastChar) {
        var temp = s[firstChar];
        s[firstChar] = s[lastChar];
        s[lastChar] = temp;
        firstChar++;
        lastChar--;
        
    }
    return s
};
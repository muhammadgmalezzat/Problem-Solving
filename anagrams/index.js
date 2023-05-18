s = "anagram";
t = "nagaram";

var isAnagram = function(s, t) {
    const str1 = buildChar(s)
    const str2 = buildChar(t)
    let len1 = Object.keys(str1).length;
    let len2 = Object.keys(str2).length;
    //console.log(Object.keys(str1).length)

    if (len1 === len2) {
        for (char in str1) { 
            if (str1[char] !== str2[char]) {
                return false;
            }
        }
    } else {
        return false;
    }

return true
};
var buildChar = (str)=>{
    const chars = {};
    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    chars[char] = chars[char] + 1 || 1;
    }
    return chars;
}

console.log(isAnagram(s,t));
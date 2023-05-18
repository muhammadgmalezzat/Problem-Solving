/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0];
    let commonString = "";
    const firstElem = strs[0];

    for(let i = 0; i < firstElem.length; i++){
        let currentChar = firstElem.charAt(i);
        for(let j = 0; j < strs.length; j++){
            let currentChar2 = strs[j].charAt(i);
            if(i === 0 && currentChar !== currentChar2) return "";
            else if(currentChar !== currentChar2) return commonString;
        }
        commonString = commonString.concat(currentChar);
    }
    console.log(commonString);
    return commonString;
};

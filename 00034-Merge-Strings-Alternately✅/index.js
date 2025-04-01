//var word1 = "abcwee";
//var word2 = "pqrd";

var mergeAlternately = function (word1, word2) {
    let mergedString = "";
    let maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) mergedString += word1[i];
        if (i < word2.length) mergedString += word2[i];
    }


    return mergedString;
};


//console.log(mergeAlternately(word1, word2)); // console)
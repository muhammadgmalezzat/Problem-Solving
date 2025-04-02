var str1 = "ABCABC";
var str2 = "ABC";

function gcdOfStrings(str1, str2) {

    // Check if str1 and str2 share a common divisor string
    if (str1 + str2 !== str2 + str1) {
        return ""; // No common divisor string
    }

    // Function to find the Greatest Common Divisor (GCD)
    
    function gcd(len1, len2) {
        return len2 === 0 ? len1 : gcd(len2, len1 % len2);
    }

    // Compute GCD of string lengths
    let gcdLength = gcd(str1.length, str2.length);

    // The largest common divisor string is the prefix of length gcdLength
    return str1.substring(0, gcdLength);
}



console.log(gcdOfStrings(str1,str2));
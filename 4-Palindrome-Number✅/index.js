/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
        var y = x.toString().split("").reverse().toString();
    var Z = x.toString().split("").toString();

    if (y == Z) {
        return true;
    } else {
        return false;
    }
};
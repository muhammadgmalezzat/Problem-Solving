/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num=parseInt(x.toString().split("").reverse().join(""))
    if (num > 0x7FFFFFFF) { return 0; }
    else { return num * Math.sign(x) } 
    
};
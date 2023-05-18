const n = 15

var fizzBuzz = function (n) {
    let out=[]
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            out.push("Fizz")
            //console.log("Fizz")
        } else if (i % 3 !== 0 && i % 5 === 0) {
            out.push("Buzz")
            //console.log("Buzz")
        } else if (i % 3 === 0 && i % 5 === 0) {
            out.push("FizzBuzz")
            //console.log("FizzBuzz")
        } else {
            out.push(`${i}`)
        }
    }
    return out
};
console.log(fizzBuzz(n))
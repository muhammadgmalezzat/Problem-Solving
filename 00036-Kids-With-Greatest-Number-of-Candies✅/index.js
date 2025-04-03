var candies = [2, 3, 5, 1, 3];
var extraCandies = 3;

var kidsWithCandies = function(candies, extraCandies) {
    const maxNum = Math.max(...candies);
    let result = [];
    for (i = 0; i < candies.length; i++){
        if (candies[i]+extraCandies >= maxNum) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result;
};

console.log(kidsWithCandies(candies,extraCandies))

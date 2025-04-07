var candies = [2, 3, 5, 1, 3];
var extraCandies = 3;

var kidsWithCandies = function(candies, extraCandies) {
    const maxNum = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= maxNum);
};



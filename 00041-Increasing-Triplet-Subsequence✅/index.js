var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let n of nums) {
        if (n <= first) {
            first = n; // New smallest number
        } else if (n <= second) {
            second = n; // New second smallest
        } else {
            // Found a number > second → triplet exists
            return true;
        }
    }

    return false;
};
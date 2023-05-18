const nums = [1,7,3,6,5,6]
var pivotIndex = function(nums) {

    let leftsum=0
    let totalsum = 0
    for (let num of nums) {
        totalsum+=num
    }


    for (let i = 0; i < nums.length; i++){
        if (totalsum - leftsum - nums[i] === leftsum) {
            return i
        }
        leftsum += nums[i]
    }
    return -1

};
console.log(pivotIndex(nums))
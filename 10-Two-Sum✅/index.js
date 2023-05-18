/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) { 

hhh:for (let i = 0; i < nums.length; i++)
{
    for (let j = 0; j < i; j++)
    {
        if (nums[j] + nums[i] == target)
        {
            return [j, i];
            break hhh;
        }

    }
}
    
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let remain=nums[0];
    for(let i=1;i<nums.length;i++){
        if(remain===0) return false;
        remain = Math.max(nums[i],remain-1);
    }
    return true;
};
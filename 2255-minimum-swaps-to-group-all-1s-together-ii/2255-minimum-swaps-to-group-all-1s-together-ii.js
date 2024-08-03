/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    countOne = 0;
    let n = nums.length;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            countOne++;
        }
    }
    let start=0;
    let zeroCount = 0;
    for(let i=0;i<countOne;i++){
        if(nums[i]===0)zeroCount++;
    }
    let ans = zeroCount;
    for(let i=start+1;i<n;i++){
        if(nums[i-1]===0 && nums[(i+countOne-1)%n]===1){
            zeroCount--;
        }
        else if(nums[i-1]===1 && nums[(i+countOne-1)%n]===0) zeroCount++;
        console.log(zeroCount)
        ans=Math.min(zeroCount,ans);
    }
    return ans;
    
};
/**
 * @param {number[]} nums
 * @return {number}
 */
 
var jump = function(nums) {
    let n = nums.length
    let ans=0;
    let curr = nums[0];
    let index=0;
    while(index<n-1){
        if(index+curr>=n-1) return ans+1;
        let temp=index+curr;
        let currIndex = index;
        let tempCurr = curr;
        for(let i=currIndex+1;i<=currIndex+tempCurr;i++){
            if(temp<nums[i]+i){
                temp=nums[i]+i;
                curr=nums[i];
                index=i;
            }
        }
        ans+=1;

    }
    return ans;
};
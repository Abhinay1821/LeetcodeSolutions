/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=1,j=1,count=1,curr=nums[0];
    while(j<nums.length){
        if(curr==nums[j]){
            if(count<2){
                let temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
                i++;
                j++;   
            }
            else j++;
            count++;
        }
        else{
            count=0;
            curr=nums[j];
        }
        
    }
    return i;
};
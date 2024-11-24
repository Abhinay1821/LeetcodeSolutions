function removeDuplicates(nums: number[]): number {
    let i =1,j=1,count=1,curr = nums[0];
    while(j<nums.length){
        if(nums[j]===curr){
            if(count<2){
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                i++;
            }
            j++;
            count++;
        }
        else{
            curr = nums[j];
            count = 0;
        }
    }
    return i;
};

// 
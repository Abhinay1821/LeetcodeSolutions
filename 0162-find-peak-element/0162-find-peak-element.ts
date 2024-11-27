function findPeakElement(nums: number[]): number {
    let start = 0;
    let end = nums.length-1;
    while(start<end){
        let mid = start + Math.floor((end-start) / 2);
        if(nums[mid]>nums[mid+1]){
            end = mid;
        }
        else start = mid+1;
    }
    return end;
};
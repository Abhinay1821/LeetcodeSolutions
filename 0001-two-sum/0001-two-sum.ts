function twoSum(nums: number[], target: number): number[] {
    const hmap = new Map<number,number>();
    const ans = []
    for(let i=0;i<nums.length;i++){
        if(!hmap.has(nums[i])){
            hmap.set(nums[i],i)
        }
        if(hmap.has(target - nums[i]) && hmap.get(target-nums[i])!==i){
            ans.push(hmap.get(target-nums[i]));
            ans.push(i);
        }
    }
    return ans;

};
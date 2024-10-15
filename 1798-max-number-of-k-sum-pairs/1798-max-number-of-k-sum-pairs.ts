function maxOperations(nums: number[], k: number): number {
    nums.sort((a,b)=>a-b);
    let s = 0, e = nums.length - 1;
    let ans = 0;
    while(s<e){
        const sum = nums[s] + nums[e]
        if(sum === k){
            ans++;
            s++;
            e--;
        }
        else if(sum > k) e--;
        else s++;
    }
    return ans;
};
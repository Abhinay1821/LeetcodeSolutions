class Solution {
public:
    bool canJump(vector<int>& nums) {
        if(nums.size()==1) return true;
        int val=nums[0];
        for(int i=1;i<nums.size()-1;i++){
            if(val<=0) return false;
            val=max(nums[i],val-1);
        }
        return val>0;
    }
};
class Solution {
public:
    bool canJump(vector<int>& nums) {
        int val=0;
        for(int i=0;i<nums.size();i++){
            if(val<0) return false;
            else if(nums[i]>val){
                val = nums[i];
            }
            val-=1;
        }
        return true;
    }
};
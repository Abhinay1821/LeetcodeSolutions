class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        int ans = INT_MAX;
        int sum=0;
        int start=0;
        for(int i=0;i<nums.size();i++){
            sum+=nums[i];
            while(sum-nums[start]>=target){
                    sum-=nums[start];
                    start++;
            }
            if(sum>=target) ans=min(ans,i-start+1);
        }
        return ans==INT_MAX ? 0 : ans;

    }
};
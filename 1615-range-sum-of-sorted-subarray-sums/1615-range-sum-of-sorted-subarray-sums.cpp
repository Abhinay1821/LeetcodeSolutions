class Solution {
public:
    int rangeSum(vector<int>& nums, int n, int left, int right) {
        vector<int>final;
        for(int i=0;i<nums.size();i++){
            int sum=0;
            for(int j=i;j<nums.size();j++){
                sum+=nums[j];
                final.push_back(sum);
            }
        }
        sort(final.begin(),final.end());
        int ans = 0;
        for(int i=left-1;i<right;i++){
            ans=(ans+final[i])%(1000000007);
        }
        return (int)ans%(1000000007);
    }
};
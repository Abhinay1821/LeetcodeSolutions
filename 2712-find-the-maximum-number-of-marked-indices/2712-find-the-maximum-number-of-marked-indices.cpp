class Solution {
public:
    bool check(vector<int>&nums,int k,int n){
        for(int i=0;i<k;i++){
            if(nums[i]*2>nums[n-k+i]) return false;
        }
        return true;
    }
    int maxNumOfMarkedIndices(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        int s=0,e=nums.size()/2;
 
        while(s<=e){
            int mid = (e-s)/2 +s;
            if(check(nums,mid,nums.size())) s=mid+1;
            else e = mid-1;
        }
        return e*2;
        
    }
};
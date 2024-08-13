// struct VectorHash {
//     std::size_t operator()(const std::vector<int>& v) const {
//         std::size_t hash = 0;
//         for (int i : v) {
//             hash ^= std::hash<int>{}(i) + 0x9e3779b9 + (hash << 6) + (hash >> 2);
//         }
//         return hash;
//     }
// };

class Solution {
public:
    // void combo(vector<int>&nums,int target,int sum,int index,int &ans,unordered_map<vector<int>,int,VectorHash>&umap,vector<int>temp){
    //     if(sum==target) {
    //         ans++;
    //         return;
    //     }
    //     else if(sum>target) return;
    //     for(int i=0;i<nums.size();i++){
    //         sum+=nums[i];
    //         temp.push_back(nums[i]);
    //         sort(temp.begin(),temp.end());
    //         if(umap.find(temp)!=umap.end()) return;
    //         else combo(nums,target,sum,i,ans,umap,temp);
    //         umap[temp] = sum;
    //         temp.pop_back();
    //         sum-=nums[i];
    //     }
    // }
    int combinationSum4(vector<int>& nums, int target) {
        // int ans=0;
        // unordered_map<vector<int>,int,VectorHash>umap;
        // vector<int>temp;
        // combo(nums,target,0,0,ans,umap,temp);
        // return ans;
        vector<unsigned int>dp(target+1,0);
        dp[0]=1;
        for(int i=1;i<=target;i++){
            for(int j=0;j<nums.size();j++){
                if(nums[j]<=i){
                    dp[i]+=dp[i-nums[j]];
                }
            }
        }
        return dp[target];
    }
};
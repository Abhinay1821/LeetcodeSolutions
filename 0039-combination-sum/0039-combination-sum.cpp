class Solution {
public:
    void comb(vector<int>&cand,int sum, int target,int index,vector<vector<int>>&ans,vector<int>&temp){
        if(sum==target){
            ans.push_back(temp);
            return;
        }
        else if(sum>target) return;
        for(int i=index;i<cand.size();i++){
            temp.push_back(cand[i]);
            comb(cand,sum+cand[i],target,i,ans,temp);
            temp.pop_back();
        }
    }
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        vector<vector<int>>ans;
        vector<int>temp;
        comb(candidates,0,target,0,ans,temp);
        return ans;
    }
};
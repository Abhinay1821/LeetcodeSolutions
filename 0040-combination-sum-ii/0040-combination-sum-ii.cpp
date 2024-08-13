struct VectorHash {
    std::size_t operator()(const std::vector<int>& v) const {
        std::size_t hash = 0;
        for (int i : v) {
            hash ^= std::hash<int>{}(i) + 0x9e3779b9 + (hash << 6) + (hash >> 2);
        }
        return hash;
    }
};

class Solution {
public:
    void comb(vector<int>& cand, int sum, int target, vector<vector<int>>&ans,
              vector<int>temp,int index) {
        if (sum == target) {
            ans.push_back(temp);
            return;
        }
        for(int i=index;i<cand.size();i++){
            if(i>index && cand[i]==cand[i-1]) continue;
            if(sum+cand[i]>target) return;
            temp.push_back(cand[i]);
            comb(cand,sum+cand[i],target,ans,temp,i+1);
            temp.pop_back();
        }
    }
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        sort(candidates.begin(),candidates.end());
        vector<vector<int>>ans;
        vector<int>temp;
        comb(candidates,0,target,ans,temp,0);
        return ans;
    }
};
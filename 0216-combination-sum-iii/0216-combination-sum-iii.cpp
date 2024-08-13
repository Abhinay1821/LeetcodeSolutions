class Solution {
public:
    void combo(int k,int n,vector<vector<int>>&ans,int index,vector<int> temp,int sum){
        if(temp.size()==k){
            if(sum==n) ans.push_back(temp);
            return;
        }
        for(int i=index;i<=9;i++){
            if(sum+i>n) break;
            temp.push_back(i);
            combo(k,n,ans,i+1,temp,sum+i);
            temp.pop_back();
        }
    }
    vector<vector<int>> combinationSum3(int k, int n) {
        vector<vector<int>>ans;
        vector<int>temp;
        combo(k,n,ans,1,temp,0);
        return ans;
    }
};
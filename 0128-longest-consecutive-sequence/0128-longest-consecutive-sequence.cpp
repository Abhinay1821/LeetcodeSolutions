class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        priority_queue<int>pq;
        unordered_map<int,int>umap;
        for(int i=0;i<nums.size();i++){
            if(umap.find(nums[i])==umap.end()){
                pq.push(nums[i]);
            }
            umap[nums[i]]++;
        }
        int res=0;
        int ans=1;
        int curr;
        while(!pq.empty()){
            curr=pq.top();
            pq.pop();
            if(pq.top()+1==curr){
                ans++;
            }
            else{
                res=max(ans,res);
                ans=1;
            }
        }
        return res;
    }
};
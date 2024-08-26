class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        priority_queue<int>pq;
        unordered_map<int,int>umap;
        if(nums.size()==0) return 0;
        for(int i=0;i<nums.size();i++){
            if(umap.find(nums[i])==umap.end()){
                pq.push(nums[i]);
            }
            umap[nums[i]]++;
        }
        int res=0;
        int ans=1;
        int curr = pq.top();
        pq.pop();
        while(!pq.empty()){
            cout<<pq.top()<<endl;
            if(pq.top()+1==curr){
                ans++;
            }
            else{
                res=max(ans,res);
                ans=1;
            }
            curr=pq.top();
            pq.pop();
        }
        return max(res,ans);
    }
};
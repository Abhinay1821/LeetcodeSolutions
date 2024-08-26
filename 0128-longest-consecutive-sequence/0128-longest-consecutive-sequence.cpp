class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        priority_queue<int>pq;
        for(int i=0;i<nums.size();i++){
            pq.push(nums[i]);
        }
        int res=0;
        int ans=1;
        int curr;
        while(!pq.empty()){
            curr=pq.top();
            pq.pop();
            cout<<pq.top()<<" "<<curr<<endl;
            if(!pq.empty() && pq.top()+1==curr){
                ans++;
            }
            else if(!pq.empty() && pq.top()==curr) continue;
            else{
                res=max(ans,res);
                ans=1;
            }
        }
        return res;
    }
};
class Solution {
public:
    long long maxScore(vector<int>& nums1, vector<int>& nums2, int k) {
        priority_queue<pair<int,int>>maxheap;
        priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>>minheap;

        long long sum=0;
        long long ans=INT_MIN;
        for(int i=0;i<nums1.size();i++){
            maxheap.push({nums1[i],i});
        }
        while(!maxheap.empty() && k>0){
            pair<int,int> top = maxheap.top();
            sum+=top.first;
            minheap.push({nums2[top.second],top.second});
            maxheap.pop();
            k--;
        }
        ans = max(sum*minheap.top().first,ans);
        while(!maxheap.empty()){
            int index = minheap.top().second;
            minheap.pop();
            sum-=nums1[index];
            pair<int,int> pairMaxheap = maxheap.top();
            maxheap.pop();
            sum+=pairMaxheap.first;
            minheap.push({nums2[pairMaxheap.second],pairMaxheap.second});
            ans = max(sum*minheap.top().first,ans);
        }
        return ans;
    }
    
};
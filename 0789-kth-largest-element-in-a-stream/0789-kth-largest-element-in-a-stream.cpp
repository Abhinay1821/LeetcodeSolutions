class KthLargest {
public:
    int num;
    priority_queue<int,vector<int>, greater<int>>pq;
    KthLargest(int k, vector<int>& nums) {
        num=k;
        for(int i=0;i<nums.size();i++){
            if(pq.size()<k) pq.push(nums[i]);
            else if(pq.top()<nums[i]){
                pq.pop();
                pq.push(nums[i]);
            }
        }
    }
    
    int add(int val) {
        pq.push(val);
        if(pq.size()>num){
            pq.pop();
        } 
        return pq.top();
    }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest* obj = new KthLargest(k, nums);
 * int param_1 = obj->add(val);
 */
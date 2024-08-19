

class Solution {
public:
    static bool comp(vector<int>&a,vector<int>&b){
        return a[0] < b[0];
    }
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        int n = intervals.size();
        sort(intervals.begin(),intervals.end(),comp);
        vector<vector<int>>ans;
        int start=intervals[0][0];
        int end=intervals[0][1];
        int index=0;
        while(index<n){
            if(index<n-1 && end >= intervals[index+1][0]){
                if(end < intervals[index+1][1]) end = intervals[index+1][1];
            }
            else{
                ans.push_back({start,end});
                if(index<n-1){
                    start=intervals[index+1][0];
                    end = intervals[index+1][1];
                }
            }
            index++;

        }
        return ans;
    }
};
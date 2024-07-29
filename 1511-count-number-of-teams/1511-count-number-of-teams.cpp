class Solution {
public:
    int numTeams(vector<int>& rating) {
        int ans = 0;
        int n = rating.size();
        vector<pair<int,int>>minMaxCount(n,{0,0});
        for(int i=rating.size()-2;i>=0;i--){
            int mini = 0, maxi=0;
            for(int j=i+1;j<rating.size();j++){
                if(rating[j]>rating[i]) maxi++;
                else mini++;
            }
            minMaxCount[i] = {mini,maxi};
        }
        for(int i=0;i<rating.size()-2;i++){
            for(int j=i+1;j<rating.size()-1;j++){
                if(rating[i]>rating[j])ans+=minMaxCount[j].first;
                else ans+=minMaxCount[j].second;
            }
        }
        return ans;
    }
};
class Solution {
public:
    int minimumDeletions(string s) {
        int a = 0;
        for(int i=0;i<s.size();i++){
            if(s[i]=='a') a++;
        }
        int b = s.size() - a;
        int bCount = b;
        int ans = INT_MAX;
        for(int i=0;i<s.size();i++){
            if(s[i]=='a'){
                a--;
                ans=min(a+(b-bCount),ans);
            }
            else{
                ans=min(a+(b-bCount),ans);
                bCount--;
            }
        }
        return ans;
    }
};
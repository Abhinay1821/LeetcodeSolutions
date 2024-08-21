class Solution {
public:
    int countKConstraintSubstrings(string s, int k) {
        vector<pair<int,int>>substrings;
        int n = s.size();
        int ans=0;
        int zero=0,one=0;
        for(int i=0;i<s.size();i++){
            for(int j=i;j<s.size();j++){
                if(s[j]=='0') zero++;
                else one++;
                if(zero<=k || one <= k) ans++;
            }
            one=0;
            zero=0;;
        }
        return ans;
    }
};
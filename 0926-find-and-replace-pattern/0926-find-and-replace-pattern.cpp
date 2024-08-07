class Solution {
public:
    vector<int>Pattern(string s){
        vector<int>pattern;
        unordered_map<char,int>umap;
        int ind=0;
        for(int i=0;i<s.size();i++){
            if(umap.find(s[i])==umap.end()){
                ind+=1;
                umap[s[i]] = ind;
            }
            pattern.push_back(umap[s[i]]);
        }
        return pattern;
    }

    vector<string> findAndReplacePattern(vector<string>& words, string pattern) {
        vector<int>p = Pattern(pattern);
        vector<string>ans;
        for(int i=0;i<words.size();i++){
            vector<int> pat = Pattern(words[i]);
            if(pat==p){
                ans.push_back(words[i]);
            }
        }
        return ans;
    }
};
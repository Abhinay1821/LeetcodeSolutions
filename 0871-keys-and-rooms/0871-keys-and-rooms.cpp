class Solution {
public:
    void dfs(vector<vector<int>>&rooms,vector<int>&vis,int curr){
        vis[curr]=0;
        for(int i=0;i<rooms[curr].size();i++){
            if(vis[rooms[curr][i]]==-1) dfs(rooms,vis,rooms[curr][i]);
        }
    }
    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        int n = rooms.size();
        vector<int>vis(n,-1);
        dfs(rooms,vis,0);
        int sum=0;
        for(int i=0;i<vis.size();i++){
            sum+=vis[i];
        }
        cout<<sum<<endl;
        return sum==0;
    }
};
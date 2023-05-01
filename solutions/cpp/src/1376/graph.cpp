class Solution {
public:
    int numOfMinutes(int n, int headID, vector<int>& manager, vector<int>& informTime) {
        int res=0;

        vector<vector<int>> graph(n,vector<int>());

        for(int i=0;i<n;i++){
            int leader=manager[i];
            if(leader!=-1){
                graph[leader].push_back(i);
            }
        }

        function<void(int,int)> dfs =
        [&](int id,int time){
            res=max(res,time);
            for(int next: graph[id]){
                dfs(next,time+informTime[id]);
            }
        };

        dfs(headID,0);

        return res;
    }
};
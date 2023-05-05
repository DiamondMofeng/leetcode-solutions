class Solution {
public:
    int hardestWorker(int n, vector<vector<int>>& logs) {
        int resId=0;
        int maxSpentTime=0;
        int lastTime=0;
        for(auto log : logs){
            int spentTime=log[1]-lastTime;
            lastTime=log[1];

            if(
                spentTime>maxSpentTime
                ||(spentTime == maxSpentTime && log[0]<resId )
            ){
                maxSpentTime=spentTime;
                resId=log[0];
            }

        }

        return resId;
    }
};
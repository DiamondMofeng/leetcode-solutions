class Solution {
public:
    int giveGem(vector<int>& gem, vector<vector<int>>& operations) {
        for(const auto& op:operations){
            int half=gem[op[0]]/2;
            gem[op[0]]-=half;
            gem[op[1]]+=half;
        }

        int ming=INT_MAX;
        int maxg=INT_MIN;
        for(auto g:gem){
            ming=min(ming,g);
            maxg=max(maxg,g);
        }
        return maxg-ming;
    }
};
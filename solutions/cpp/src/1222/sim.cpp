class Solution {
public:
    vector<vector<int>> queensAttacktheKing(vector<vector<int>>& queens, vector<int>& king) {
        static int dirs[8][2]={
            {-1,-1},{-1,0},{-1,1},
            { 0,-1},{ 0,1},
            { 1,-1},{ 1,0},{ 1,1}
        };

        unordered_set<int> st;
        for(const auto& q:queens){
            st.insert({q[0]*8+q[1]});
        }

        vector<vector<int>> res;

        for(const auto [diffR,diffC]:dirs){
            int r=king[0];
            int c=king[1];
            while(r>=0&&r<8&&c>=0&&c<8){
                if(st.count(r*8+c)){
                    res.push_back({r,c});
                    break;
                }
                r+=diffR;
                c+=diffC;
            }
        }

        return res;
    }
};
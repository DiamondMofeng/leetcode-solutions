class Solution {
public:
    bool checkValidGrid(vector<vector<int>>& grid) {
        if (grid[0][0]!=0){
            return false;
        }

        int rowCount=grid.size();
        int colCount=grid[0].size();

        static int DIRECTIONS[8][2]={
            {-2, 1},
            {-2,-1},
            {-1,-2},
            {-1, 2},
            { 1,-2},
            { 1, 2},
            { 2, 1},
            { 2,-1}
        };

        int c=0;
        int r=0;
        int next=1;
        while(next<rowCount*colCount){
            for(auto [diffC,diffR]:DIRECTIONS){
                int newC=c+diffC;
                int newR=r+diffR;
                if(newC<0||newC>=colCount||newR<0||newR>=rowCount){
                    continue;
                }
                if(grid[newR][newC]==next){
                    next+=1;
                    r=newR;
                    c=newC;
                    goto continue_next;
                }
            }
            return false;
            continue_next:continue;
        }

        return true;
    }
};
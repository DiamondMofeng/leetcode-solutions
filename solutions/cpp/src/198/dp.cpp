class Solution {
public:
    int rob(vector<int>& nums) {
        int res=0;
        int robbed=0;
        int notRobbed=0;

        for(auto x:nums){
            
            int _robbed=robbed;
            int _notRobbed=notRobbed;

            robbed=max(_robbed,_notRobbed+x);
            notRobbed=max(_robbed,notRobbed);

            res=max(res,max(robbed,notRobbed));
        }

        return res;
    }
};
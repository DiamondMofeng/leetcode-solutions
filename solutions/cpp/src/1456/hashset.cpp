class Solution {
public:
    int maxVowels(string s, int k) {
        unordered_set<char> vowels = {'a','e','i','o','u'};
        
        int cur=0;
        for(int i=0;i<k;i++){
            if(vowels.count(s[i])){
                cur+=1;
            }
        }

        int res=cur;
        for(int i=k;i<s.size();i++){
            cur=cur+vowels.count(s[i])-vowels.count(s[i-k]);
            res=max(res,cur);
        }

        return res;
        

        return 1;
    }
};
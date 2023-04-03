class Solution
{
public:
  vector<int> prevPermOpt1(vector<int> &arr)
  {
    int n = arr.size();
    for (int left = n - 2; left >= 0; left--)
    {
      // 从右往左找到第一个合适的left位置
      // 例如:[...,3,1] 中3可以被替换，选择left为0
      //    而[...,1,3] 中不存在合适的left位置
      if (arr[left] > arr[left + 1])
      {
        // 从右往左找小于left位置的第一个元素，
        // 若存在相邻重复元素，答案为最左侧的
        int right = n - 1;
        while (arr[right] >= arr[left] || arr[right] == arr[right - 1])
        {
          right -= 1;
        }
        swap(arr[left], arr[right]);
        return arr;
      }
    }

    return arr;
  }
};

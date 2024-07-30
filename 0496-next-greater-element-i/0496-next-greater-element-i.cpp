class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        unordered_map<int, int> umap;
        stack<int> s;
        // s.push(nums2[0]);
        for (int i = 0; i < nums2.size(); i++) {
            while (!s.empty() && s.top() < nums2[i]) {
                umap[s.top()] = nums2[i];
                s.pop();
            }
            s.push(nums2[i]);
            umap[nums2[i]] = -1;
        }
        for (int i = 0; i < nums1.size(); i++) {
            nums1[i] = umap[nums1[i]];
        }
        return nums1;
    }
};
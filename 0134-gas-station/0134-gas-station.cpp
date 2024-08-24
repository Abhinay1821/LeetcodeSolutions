class Solution {
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
        int size = gas.size();
        int partialSum = INT_MAX;
        int total=0,start;
        for(int i=0;i<size;i++){
            total=total + gas[i]-cost[i];
            if(total<partialSum){
                partialSum = total;
                start=i+1;
            }
        }
        return total < 0 ? -1 : start%size;
    }
};
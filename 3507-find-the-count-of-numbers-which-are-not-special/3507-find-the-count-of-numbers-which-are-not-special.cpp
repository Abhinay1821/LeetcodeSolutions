class Solution {
public:
    bool isPrime(int num){
        if(num==1) return false;
        for(int i=2;i<=num/2;i++){
            if(num%i==0) return false;
        }
        return true;
    }
    int nonSpecialCount(int l, int r) {
        int total = r-l+1;
        for(int i=ceil(sqrt(l));i<=sqrt(r);i++){
            if(isPrime(i)) total--;
            
        }
        return total;
    }
};
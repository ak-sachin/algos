#include<bits/stdc++.h>
using namespace std;
#define endl "\n"
#define eb emplace_back
#define vi vector<int>


bool isPrime(int n){
	if(n == 1) return false;
	 for (int i = 2;i*i <= n;i++){
	 	if(n%i == 0){
	 		return false;
	 	}
	 }
	 return true;
}


int main(){
	int n,t;	cin >> t;
	while(t--){
		cin >> n;
		if(isPrime(n)){			cout << "YES"<<endl;
		}else{
			cout << "NO" << endl;
		}
	}
	
}
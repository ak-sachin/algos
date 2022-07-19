#include<bits/stdc++.h>
using namespace std;
#define endl "\n"
#define eb emplace_back
#define vi vector<int>


int prime_table[1000001];

int main(){
		
	int m,q, n;
	
	int maxN = 1000000;
	
	for(int i = 0; i<= maxN;i++) prime_table[i] = 1;
	
	prime_table[0] = prime_table[1] = 0;
	
	
	//Sieve - Mark the multiples of the prime number to false.
	for(int i = 2; i*i<= maxN;i++){
		if(prime_table[i]){
			for(int j = i+i; j<= maxN;j+=i){
				prime_table[j] = 0;
			}
		}
	}
	cin >> q;
	while(q--){
		cin >> n;
		if(prime_table[n]){
			cout << "YES" << endl;
		}else{
			cout << "NO" << endl;
		}
	}
	
	// TC - O(Nlog(log(N))) SC - O(N)
		
}
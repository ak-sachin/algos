#include<bits/stdc++.h>
using namespace std;
#define endl "\n"
#define eb emplace_back
#define vi vector<int>



vi adj[10000];
vi inTime(10000);
vi outTime(10000);
bool visited[10000];

int timer = 0;

void dfs(int node){
	visited[node] = true;
	inTime[node] = timer++;
	for(auto c: adj[node]){
		if(visited[c] == false){
			dfs(c);
		}
	}
	outTime[node] = timer++;
}


int main(){
	
	int n,m,u,v;
	cin >> n >> m;
	
	for(int i = 0; i< m;i++){
		cin >> u >>v;
		adj[u].eb(v);
		adj[v].eb(u);	
	}
	
	for(int i = 1 ; i<= n;i++){
		if(visited[i] == false){
			dfs(i);	
		}
	}
	
	// In Time
	for(int i =1; i<= n;i++){
		cout << "InTime of " << i<< "is " << inTime[i] << endl;
	}
	
	//outTime
	for(int i =1; i<= n;i++){
		cout << "outTime of " << i<< "is " << outTime[i] << endl;
	}
	
}
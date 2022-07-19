#include<bits/stdc++.h>
using namespace std;

#define endl "\n"

vector<int> adj[n];
vector<int> transpose[n];
vector<int> order;
vector<int> scc;
int visited[10000];


void dfs(int v){
	visited[v] = 1;
	for(auto child : adj){
		if(!visited[child]){
			dfs(child)
		}
	}

	order.emplace_back(v);
}


void dfs1(int v){
	visited[v] = 1;
	for(auto child : transpose[v]){
		if(!visited[child]){
			dfs1(child);
		}
	}
	scc.emplace_back(v)
}

int main(){

	int m,n,u,v;
	
	cin >> n >> m;
	for(int i = 0;i<m;i++){
		cin >> u >>v;
		adj[u].emplace_back(v);
		transpose[v].emplace_back(u);
	}

	for(int i = 0;i<=n;i++){
		if(visited[i] == 0){
			dfs(i)
		}
	}

	for(int i = 0;i<n;i++){
		visited[i] = 0;
	}

	for(int i = 0; i<= n; i++){
		if(visited[i] == 0){
			scc.clear();
			dfs1(order[n-i]);
			cout << "Connected Component for " << order[n-i] << endl;
			for(auto child: scc){
				cout << child << " ";
				cout << endl;
			}
		}
	}
}
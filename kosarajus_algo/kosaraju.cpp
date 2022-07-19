#include<bits/stdc++.h>
using namespace std;


#define endl "\n"
#define eb emplace_back
#define vi vector<int>

// Graph
vi adj[10000];
vi transpose_graph[10000];
int visited[10000];

vi scc;
vi order;


void dfs(int node){
	visited[node]  = 1;
	
	for(auto child : adj[node]){
		if(visited[child] == 0){
			dfs(child);
		}
	}
	
	order.eb(node);
}


 void transpose_dfs(int node){
 	visited[node] = 1;
 	
 	for(auto child: transpose_graph[node]){
 		if(visited[child] == 0){
 			transpose_dfs(child);
 		}
 	}
 	
 	scc.eb(node);
 }




int main(){
 	int n, m, u,v;
 	
 	cin >> n >> m;
 	for(int i =0;i<m;i++){
 		cin >> u >> v;
 		adj[u].eb(v);
 		transpose_graph[v].eb(u);
 	}
 	
 	for(int i = 1;i <= n;i++){
 		if(visited[i] == 0){
 			dfs(i);
 		}
 	}
 	
 	for(int i = 1;i<= n;i++){
 		visited[i] = 0;
 	}
 	
 	for(int i = 1;i <= n;i++){
 		if(visited[order[n-i]] == 0){
 			scc.clear();
 			transpose_dfs(order[n-i]);
 			cout <<  "strongly connected components for "<< order[n-i] <<  endl;
 			for(auto child: scc){
 				cout << child << " ";
 			}
 			cout << endl;
 		}
 	}
 	
}
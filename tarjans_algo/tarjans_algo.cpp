#include<bits/stdc++.h>
using namespace std;


#define endl "\n"
#define eb emplace_back



vector<int> adj[10000];
int visited[10000];
vector<int> low_link(10000);
vector<int> inTime(10000);
int timer;
stack<int> active_nodes;
unordered_set<int> is_active_nodes;
int scc = 0;


void dfs(int node){
	visited[node] = 1;
	inTime[node] = low_link[node] = timer++;
	
	active_nodes.push(node);
	is_active_nodes.insert(node);

	for(auto child: adj[node]){
		if(visited[child] && is_active_nodes.find(child)!=is_active_nodes.end()){
			low_link[node] = min(inTime[child], low_link[node]);
		}else if(visited[node] == 0){
			dfs(child);
			if(is_active_nodes.find(child) != is_active_nodes.end()){
				low_link[node] = min(low_link[node], low_link[child]);	
			}
		}
	}
	if(low_link[node] == inTime[node]){
		while(active_nodes.top() != node){
			is_active_nodes.erase(active_nodes.top());
			active_nodes.pop();
		}
		is_active_nodes.erase(active_nodes.top());
		active_nodes.pop();
		scc++;
	}
	
}


int main(){

	int n,m,u,v;

	cin >> n >> m;
	for(int i = 0;i<m;i++){
		cin >> u >> v;
		adj[u].eb(v);
	}

	for(int i = 0;i<n;i++){
		if(visited[i] == 0){
			dfs(i);
		}
	}


	cout << "Number of Strongly Connected Components " << scc << endl;


	for(auto child: adj){
		child.clear();
	}
	scc = 0;
	low_link.clear();
	inTime.clear();
	timer = 0;
	is_active_nodes.clear();
	while(!active_nodes.empty()){
		active_nodes.pop();
	}
	
}
#include<bits/stdc++.h>
using namespace std;

#define endl "\n"
#define eb emplace_back
#define vi vector<int>
#define new_line cout<<"\n"

// graph

vi adj[10000];

bool visited[10000];


// discovery, low_link, parent

vi discovery(10000);
vi low_link(10000);
vi parent(10000);


// articulation point

bool articulation_point[10000];


// timer
int timer = 1;


//dfs

void dfs(int node, int p){
	visited[node] = true;
	int count = 0;
	discovery[node] = low_link[node] = timer++;
	parent[node] = p;
	for(auto child : adj[node]){
		count++;
		if(child == p) continue;
		if(visited[child]){
			low_link[node] = min(low_link[node], discovery[child]);
		}else{
			dfs(child, node);
			low_link[node] = min(low_link[node], low_link[child]);
			if(low_link[child] > discovery[node]){
				cout<< "Bridge" << node << "===> " << child;
				new_line;
				articulation_point[node] = true;
			}
		}
	}
}




int main(){
	int n,m,u,v;
	cin >> n >> m;
	for(int i= 0;i<m;i++){
		cin>>u >> v;
		adj[u].eb(v);
		adj[v].eb(u);
	}	
	
	for(int i = 1; i<= n;i++){
		if(visited[i] == false){
			dfs(i ,-1);	
		}
		
	}
	
	//articulation points
	
	for(int i = 1;i<=n;i++){
		if(articulation_point[i]){
			cout << i << " is an articulation_point" << endl;
		}
	}
	
	new_line;
	
	// print low_link values
	
	for(int i =1 ; i<= n;i++){
		cout << "Low_link value of node " << i << "is " << low_link[i] << endl;
	}
	
	new_line;
	
	// parent
	
	for(int i =1 ; i<= n;i++){
		cout << "parent value of node " << i << "is " << parent[i] << endl;
	}
	
	
	new_line;
	// discovery
	
	for(int i =1 ; i<= n;i++){
		cout << "discovery value of node " << i << "is " << discovery[i] << endl;
	}
	
	new_line;
	
}

function floydWarshal(d, n) {
	for (let k = 0; k < n; k++) {
		for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (d[ i ][ k ] + d[ k ][ j ] < d[ i ][ j ]) {
                    d[i][j] = d[i][k] + d[k][j];
                }
            }
		}
    }

    return d;
}



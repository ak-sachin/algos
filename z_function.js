function getZarr(s) {
    let l = 0, r = 0;
    let n = s.length
    let z = new Array(n).fill(0);
    for (let i = 1; i < n; i++){
        if (i > r) {
            l = i, r = i;
            while (r < n && s[ r - l ] === s[ r ]) {
                r++
            }
            z[ i ] = r - l;
            r--
        } else {
            let k = i - l;
            if (z[ k ] < r - i + 1) z[ i ] = z[ k ];
            else {
                l = i;
                while (r < n && s[ r - l ] === s[ r ]) r++
                z[ i ] = r - l;
                r--
            }
        }
    }
    return z;
}
function main() {
	let s = "aabxaabxcaabxaabxay";
	let zArr = getZarr(s);
	console.log(` Z-Array for string ${s} is \n [ ${zArr} ]`);
}

main();
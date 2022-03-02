var n=5
var fact=n;

// fact=fact*(n-1)
// n--;
// fact=fact*(n-1)
// n--
while(n>1){
    fact=fact*(n-1)
    n--;
}
console.log(fact);
var arr = process.argv;
arr = arr.slice(2);
var sum = arr.reduce(function(pv, cv) { return Number(pv) + Number(cv); }, 0);
console.log(sum);
//takes input as command line parameters and prints their sum. 
//node 2babysteps.js 1 2 3 will print 6
var orders = [
	{amount: 250},
	{amount: 150},
	{amount: 350},
	{amount: 450},
	{amount: 050}
]

//take the total sum, can be done using a simple for loop

//*********USING reduce**********

var total = orders.reduce(function(sum, order){
	return sum+order.amount
}, 0)

//using arrow functions
var totalUsingArrow = orders.reduce((sum, order) => sum + order.amount, 0)

console.log(total)
console.log(totalUsingArrow)
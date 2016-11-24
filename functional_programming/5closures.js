/*    https://developer.mozilla.org/en/docs/Web/JavaScript/Closures
Closures are functions that refer to independent (free) variables (variables that are used 
locally, but defined in an enclosing scope). In other words, these functions 'remember' the environment in which they 
were created.
In javascript all functions are closures. It means that an independent variables defined outside the 
scope of a function can be accssed from that function.
*/

//
function sendRequest(){
	var requestId = '123'
	$.ajax({
		url: 'http://www.google.com',
		success: function(){
			alert("Request " +requestId)  //so here the requestId can access the variable outside the function score
		}
	});
}
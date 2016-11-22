//filter and reject takes an array and returns another array of reduced size
//find does the same thing but returns a single element

/*
In any functional programming language, functions are values. These values can be assigned to other variables.
ex:

var triple = function(x){
	return 3 * x;
}
var waffle = triple;
waffle(30);
Here we just created an anonymous function and assigned it to a variable called triple.
*/

/*
Functions can also be passed onto some other higher order functions.
*/
var animals = [
{name:'Fluffykins', species:'rabbit'},
{name:'Caro', species:'dog'},
{name:'Hamilton', species:'dog'},
{name:'Harold', species:'fish'},
{name:'Ursula', species:'cat'},
{name:'Jimmy', species:'fish'}
]

/*
Say I wish to filter out dogs from animals using for loop


var dogs = [];
for(var i=0; i<animals.length; i++){
	if(animals[i].species === 'dog')
		dogs.push(animals[i])
}


*/

/*
Using filter function(simplest example of higher order function)
here filtered dogs directly get assigned to the dogs variable

var dogs = animals.filter(function(animal){  // this inner function is a callback function
	return animal.species === 'dog'
})

*/

//We can decouple the filter function and assign it to some variable also
var isDog = function(animal){
	return animal.species === 'dog'
}
var dogs = animals.filter(isDog)
//So filter takes a callback and filters according to the function definition
//Similarly, there is reject function which does the opposite of filter
var otherAnimals = animals.reject(isDog) 
//map takes an array and returns an array of the exat same size

var animals = [
{name:'Fluffykins', species:'rabbit'},
{name:'Caro', species:'dog'},
{name:'Hamilton', species:'dog'},
{name:'Harold', species:'fish'},
{name:'Ursula', species:'cat'},
{name:'Jimmy', species:'fish'}
]
//map transforms a given array
//get the names of all the animals in the array

var names = function(animal){ return animal.name }
var namesWithSpecies = function(animal){ return animal.name + " is a " + animal.species } 

animalNames = animals.map(names)
animalNamesWithSpcies = animals.map(namesWithSpecies)
console.log(animalNames)
console.log(animalNamesWithSpcies)

/*
In EC6 we can use arrow functions,(just a change in syntax with the use of arrows)
*/

var nameWithArrow = animals.map((animal) => { return animal.name + " is a " + animal.species})
console.log(nameWithArrow)
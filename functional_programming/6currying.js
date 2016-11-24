/*Here dragon is a function which takes an argument name and returns a function which takes an argument size which in return 
takes another argument color which returns a string
*/


dragon = 
	name =>
		size =>
			color =>
			(name + ' is a dragon of size '+size+' and color '+color)

console.log(dragon("fluffy")("12")("blue"))

//This can also be broken into various steps

var dragonName = dragon("Fluffykins")

var dragonWithNameAndSizeAndColor = dragonName("14")("yellow")

console.log(dragonWithNameAndSizeAndColor)

//the idea is that as various variables start collecting in an app, we can collect and use them on the go 
//The function can pass through the application and gradually receive the arguments
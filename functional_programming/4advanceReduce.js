//this code takes data from a file and changes it into an object literal

var fs = require('fs')
var filedata = fs.readFileSync('data.txt', 'utf8')   				//without telling utf8 encoding, it will directly print the buffer stream
var output = filedata
			.trim()
			.split('\n')
			.map((line) => (line.split(',')))
			.reduce((customers, line) => {
				customers[line[0]] = customers[line[0]] || []      //use existing array if it already exists(for || )  otherwise its an array
				customers[line[0]].push({
					name:line[1],
					price:line[2],
					quantity:line[3]
				})
				return customers
			}, {})

console.log(output)


const fs = require('fs'); // Import the file system module



const zero = require("./0.json"); 
const one = require("./1.json"); 
const two = require("./2.json"); 
const three = require("./3.json"); 
const four = require("./4.json"); 
const five = require("./5.json"); 
const six = require("./6.json"); 
const seven = require("./7.json"); 
const eight = require("./8.json"); 
const nine = require("./9.json"); 


let everything = {} 


everything["zero"] = zero["data"]["averageVector"]
everything["one"] = one["data"]["averageVector"]
everything["two"] = two["data"]["averageVector"]
everything["three"] = three["data"]["averageVector"]
everything["four"] = four["data"]["averageVector"]
everything["five"] = five["data"]["averageVector"]
everything["six"] = six["data"]["averageVector"]
everything["seven"] = seven["data"]["averageVector"]
everything["eight"] = eight["data"]["averageVector"]
everything["nine"] = nine["data"]["averageVector"]

const filename = "everything.json"
console.log( ` Wrote to ${filename}`)
fs.writeFileSync(filename, JSON.stringify(everything, null, 2), 'utf-8');

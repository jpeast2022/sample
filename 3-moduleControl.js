// CommonJS, every file is module (by default)
// Encapsulated Code (only share minimum)

const name = require('./4-moduleName')
const sayH = require('./5-moduleFunction')
const data = require('./6-alternative')

require('./7-addition')
// console.log(data)
// console.log(name) //print object to console
// sayH(name.b)//accessing function and pass a value name from 4-module
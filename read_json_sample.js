// var fs = require('fs')
var data = require('./data.json')

// console.log(data.name)

// fs.readFile('./data.json', 'utf-8', (err,data) => {
//     var data = JSON.parse(data)
//     console.log(data.name)
// })


var fs = require('fs');
var obj;
const newLocal = './anacondaprojects/learning_node/data.json';
fs.readFile(newLocal, 'utf8', (err, data) => {
  if (err) throw err;
  obj = JSON.parse(data);
  console.log(obj.firstName);
});
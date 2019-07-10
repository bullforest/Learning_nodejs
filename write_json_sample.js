var fs = require('fs')

var data = {
    firstName: 'Bob'
}

fs.writeFile('./anacondaprojects/learning_node/data.json', JSON.stringify(data), (err) =>{
    console.log('write finished', err)
})
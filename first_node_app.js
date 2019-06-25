fs = require('fs');

//data = fs.readdirSync('c:/'); ---> This line is executed and display result until it finish then start run the next line

function c_drive_data(err, data){
    console.log('data:', data);
}

// async read dir

fs.readdir('c:/', c_drive_data);

console.log("This comes after");
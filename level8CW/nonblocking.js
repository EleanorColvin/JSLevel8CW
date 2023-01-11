// Eleanor Colvin Web Dev pd. 7/8 odd 
var fs = require("fs");
fs.readFile('input.txt', function(err, data)
{
    if(err)
        return console.error(err);
    console.log(data.toString());
});

console.log("Program Ended");
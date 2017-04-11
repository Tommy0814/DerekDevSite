//Initial server variables created,
//Initializes application
// Calls express and requires our 'path'for HTML output

var express = require('express');
var app = express();
var path = require('path');

//set localhost port to work visually in web browser

app.set('port',3000);

//this is our controller

app.use(express.static(path.join(__dirname, 'public')));

//both .get functions below are for debugging

/*app.get('/json', function(req, res) {
    console.log("GET the json");
    res
        .status(200)
        .json( {"jsonData" : true} );
});

app.get('/file', function(req, res) {
    console.log("GET the file");
    res
        .status(200)
        .sendFile(path.join(__dirname, 'app.js'));
});

*/

//creates listener for server requests

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log("Express is working on port " + port);
});
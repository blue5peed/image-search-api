var express = require('express');

var Bing = require('node-bing-api')({ accKey: "Y/3GOeQdQYweqeXsNLOzW0/956BnXBmYX9QanPKp3SY" }); //I could hide this but i'm lazy :P

var app = express();

app.get('/latest/imagesearch/ ', function (req, res) {
    
    //todo I wasted time trying to use cookies now I will just use a mongo database and print it for recent search results 
    //can store maybe 10 terms and cycle through them 
    
});

//real app here
app.use('/api/', function(req, res){
    //if its latest image search do that else do this 
    var temp;
    if(req.query.offset == undefined){
        temp = 0;
    }else{ temp = Number(req.query.offset);}
    
    temp = temp * 10; // we use this value for pagination vew top 10 and skip by 10's
    var urlTemp = req.path.replace(/[/]/, ""); //remove first letter of string from path
    Bing.images(urlTemp, {skip: temp, top: 10,}, function(error, bres, body){
        res.json(body.d);
        
    });
    
    
    
});

	//start listening 
	var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
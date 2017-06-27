var express = require('express');

var app = express();
const port = process.env.PORT || 3000;

app.use(express.static('app'));

app.use(function(req, res, next){
	if(req.headers=['x-forwarded-proto'] === 'http'){
		next();
	}
	else{
		res.redirect('http://'+req.hostname+req.url);
	}
});

app.listen(port,function(){
	console.log("Listening on port "+port);
	
});

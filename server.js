var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var express = require('express');
var app = express();

//connect to database
mongoose.connect('mongodb://localhost/imgSearch');
var searchModel = mongoose.model('img-search', new Schema({
	id: ObjectId,
	searchTerm: String,
	searchTime: String
}));

app.use(express.static(__dirname+'/WebContent'));

app.get('/api/latest/image-search', function(req, res){
	
});

app.get('/api/image-search/:searchTerm', function(req, res){
	
});

app.listen(8080);

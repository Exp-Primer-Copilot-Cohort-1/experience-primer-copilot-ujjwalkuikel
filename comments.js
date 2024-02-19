// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Add body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add CORS
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

// Create comments array
var comments = [
	{ id: 1, author: "Morgan McCircuit", text: "Great picture!" },
	{ id: 2, author: "Bending Bender", text: "Excellent stuff" }
];

// Add route to get comments
app.get('/api/comments', function(req, res) {
	res.json(comments);
});

// Add route to add comments
app.post('/api/comments', function(req, res) {
	var newComment = {
		id: Date.now(),
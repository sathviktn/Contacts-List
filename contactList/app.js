// importing modules
var express = require('express');
var mongoose = require('mongoose');
//var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var http = require('http');

// assigning express() to app to use express
// var server = express();
// var app = http.createServer(server);
var app = express();

const route = require('./routes/route');

// connect to mongo db
mongoose.connect('mongodb://localhost:27017/contactlist', { useNewUrlParser: true, useUnifiedTopology: true });
// { useNewUrlParser: true, useUnifiedTopology: true } is used as default url parser and engine is deprecated

//on connection
mongoose.connection.on('connected', function(){
    console.log('Connected to database mongodb @ 27017');
});

// om error
mongoose.connection.on('error', function(err){
    if(err){
        console.log("Error in mongo db connection", err);
    }
});

//port num
const lport = 3000;

// adding middleware
app.use(cors());

// body parser
app.use(express.json());
// deprecated
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());

// static files
// joining current dir and public to point to public folder
app.use(express.static(path.join(__dirname, 'public')));

// mapping /api to route.js
app.use('/api', route);

// testing
app.get('/', function(req, res){
    res.send("Server running successfully");
});

app.listen(lport, 'localhost', function(){
    console.log("Server started at port " + lport);
});
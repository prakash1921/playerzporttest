var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose= require('mongoose').MongoClient;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var cors=require('cors')
var app = express();
var port=8001;
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())

var con=mongoose.connect('mongodb://localhost:27017/userdb',(err)=>{
if(err){
console.log('not connected mongodb at 27017')
}else{
console.log('coonected mongo')
}
})
app.use('/', indexRouter);
// app.use('/', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler

app.listen(port)
module.exports = app;

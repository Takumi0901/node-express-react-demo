var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var booksRouter = require('./routes/books');

var app = express();
var mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit : 10,
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'react_rails_sample'
});

pool.on('connection', function (connection) {
  console.log("新しいコネクションプールが作成されました");
});
pool.on('acquire', function (connection) {
  console.log("コネクションプールから接続が獲得されました");
});
pool.on('release', function () {
  console.log("コネクションプールが戻されました");
});
pool.on('enqueue', function () {
  console.log("エンキュー");
});

global.pool = pool;

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/books', booksRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

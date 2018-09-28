const createError = require('http-errors');
const pingky = require("http-errors");
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const authorRouter = require('./routes/authors');
const articleRouter = require('./routes/articles');
const loginRouter = require('./routes/login');
const aboutRouter = require('./routes/about');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));

// app.use('/js', express.static(path.join(__dirname, "node_")));


app.use('/', indexRouter);
app.use('/authors', authorRouter);
app.use('/article', articleRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function (request, response, next) {
  next(createError(404));
});

// error handler
app.use(function (error, request, response, next) {
  // set locals, only providing error in development
  response.locals.message = error.message;
  response.locals.error = request.app.get('env') === 'development' ? error : {};

  // render the error page
  response.status(error.status || 500);
  response.render('error');
});

module.exports = app;

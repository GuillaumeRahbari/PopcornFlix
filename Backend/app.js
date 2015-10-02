var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/Movies');

var app = express();

/**
 * Utilisation du logger en mode développement.
 */
app.use(logger('dev'));


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

/**
 * Permet de définir les autorisations pour les requêtes HTTP.
 */
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Définit qui a le droit d'appeler le serveur.
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS"); // Définit les méthodes qu'on a le droit d'utiliser.
    next();
});

/**
 * Un fixe d'un problème dont je ne comprend pas l'origine ni la solution.
 * Le problème venait du fait que quand on essayait de <i>POST</i> le naviguateur web envoyait un <i>OPTIONS</i> à la place.
 */
app.options('/*', function(req, res){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
    res.sendStatus(200);
});




app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

/**
 * Permet de créer un serveur qui écoute sur le port 3000.
 * @type {http.Server}
 */
var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});

var express = require('express');
var router = express.Router();
var fs = require('fs');
var movieList = require(__dirname + '/Movies.json');

/* GET home page. */
router.get('/movies', function(req, res, next) {
    res.send(movieList);
});

router.get('/images/:name', function(req, res, next) {
    var img = fs.readFileSync(__dirname + '/../images/' + req.params.name);
    res.writeHead(200, {'Content-Type': 'image/jpeg' });
    res.end(img, 'binary');
});

router.get('/movie/:title', function(req, res, next) {
    for (movie in movieList.movies){
       if (movieList.movies[movie].title = req.params.title){
           res.send(movieList.movies[movie]);
           return;
       }
    }
    res.sendStatus(500);
});

module.exports = router;

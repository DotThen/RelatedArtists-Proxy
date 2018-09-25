const express = require ('express');
const app = express ();
const cors = require ('cors');
const path = require ('path');
const bodyparser = require ('body-parser');
const compression = require('compression');

app.use(compression());
app.use (cors ());
app.use(bodyparser.json());
app.use(express.urlencoded({extended: true}));
app.use (express.static (path.join (__dirname, './dist')));


app.get('/artist/:id', function(req, res) {
  res.redirect(`http://18.224.17.253${req.url}`);
});


app.get('/artist/:id/relatedArtists', function(req, res) {
  var redirectUrl = `http://18.206.245.56${req.url}`;
  res.redirect(redirectUrl);
});



app.get('/artists/:artistID', function(req, res) {
  var redirectUrl = `http://35.172.133.115${req.url}`;
  res.redirect(redirectUrl);
});


app.get('/artists/albums/:artistID', function(req, res) {
  var redirectUrl = `http://52.15.129.193${req.url}`;
  res.redirect(redirectUrl);
});
app.listen (3000, () => console.log ('listening!!'));

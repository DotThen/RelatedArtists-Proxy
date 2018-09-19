const express = require ('express');
const app = express ();
const cors = require ('cors');
const axios = require ('axios');
const bodyparser = require ('body-parser');

//app.use (bodyparser ());
app.use (cors ());
app.use (express.static ('./dist'));

//create axios request that gets data from different server endpoint

app.get ('/artists/:artistID', (req, res) => {
  axios
    .get ('http://localhost:3001/artists/' + req.params.artistID)
    .then (function (response) {
      res.send (response.data);
    })
    .catch (function (error) {
      console.log ('error', error);
    });
});

app.get ('/artist/:id', (req, res) => {
  axios
    .get ('http://localhost:3003/artists/' + req.params.id)
    .then (function (response) {
      res.send (response.data);
    })
    .catch (function (error) {
      console.log ('error', error);
    });
});

app.listen (3000, () => console.log ('listening!!'));

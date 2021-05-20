const express = require('express');
const bodyParser = require('body-parser');
const { getReposByUsername } = require('../helpers/github.js');
const { save, getRepo } = require('../database/index.js');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));
app.use(function(req, res, next){
	res.set({
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': '*'
	})
	next();
});

app.post('/repos', function (req, res) {
  getReposByUsername(req.body.username, (err, results) => {
    if (err) { res.status(404).send(err); } else {
      results.forEach((item) => save(item, (err) => { res.status(404).send(err); } ))
     }
  })

  res.status(200).send('Success');
});

app.get('/repos', function (req, res) {
  getRepo((err, results) => {
    if (err) { res.status(404).send(err); } else { res.status(200).send(results); }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


const express = require('express');
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js');
const save = require('../database/index.js');
let app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  const repo = getReposByUsername(req.data, (err, results) => {
    if (err) { res.status(404).send(err); } else { return results; }
  })
  save(repo, (err, results) => {
    if (err) { res.status(400).send(err); } else { res.status(200).send('Repos has been added!'); }
  })
});

app.get('/repos', function (req, res) {
  getReposByUsername(req.data, (err, results) => {
    if (err) { res.status(404).send(err); } else { res.status(200).send(results); }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


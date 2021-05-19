const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getReposByUsername } = require('../helpers/github.js');
const { save } = require('../database/index.js');
let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  getReposByUsername(req.body.username, (err, results) => {
    if (err) { return res.status(404).send(err); } else {
      results.forEach((item) => save(item, (err) => { return res.status(404).send(err); } ))
     }
  })

  return res.status(200).send();
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


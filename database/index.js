const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect('mongodb://localhost/fetcher', { useNewUrlParser: true, useUnifiedTopology: true });

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  owner: {
    login: String,
    id: Number,
  },
  html_url: String,
  url: String,
  forks: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data, callback) => {
  let newRepo = new Repo({
    id: data.id,
    name: data.name,
    owner: {
      login: data.owner.login,
      id: data.owner.id,
    },
    html_url: data.html_url,
    url: data.url,
    forks: data.forks_count,
  })

  newRepo.save((err, results) => {
    if (err) {
      callback(err);
    } else {
      console.log('Success!');
    }
  })
}

let getRepo = (callback) => {
  const repoDB = db.collection('repos');
  repoDB.find().sort({ forks: -1 }).limit(25).toArray((err, results) => { callback(err, results); })
}

module.exports.save = save;
module.exports.getRepo = getRepo;

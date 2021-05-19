const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useNewUrlParser: true, useUnifiedTopology: true });

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  owner: {
    login: String,
    id: Number,
  },
  html_url: String,
  url: String
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
  })

  newRepo.save((err, results) => {
    if (err) {
      callback(err);
    } else {
      console.log('Success!');
    }
  })
}

module.exports.save = save;
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
  data.forEach((item) => {
    let schemaData = {
      id: item.id,
      name: item.name,
      owner: {
        login: item.owner.login,
        id: item.owner.id,
      },
      html_url: item.html_url,
      url: item.url,
    }

    Repo.create(schemaData, (err, results) => {
      if (err) { callback(err); } else { callback(null, results); }
    })
  })
}

module.exports.save = save;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

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

let save = (data) => {
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
  })

  Repo.create(schemaData, (err, results) => {
    if (err) { console.error(err); } else { console.log(results, ' has been added'); }
  })
}

module.exports.save = save;
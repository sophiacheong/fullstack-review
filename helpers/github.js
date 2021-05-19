const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (user, callback) => {
  let options = {
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  axios.get(options.url, { headers: options.headers })
    .then((res) => callback(null, res.data))
    .catch((err) => callback(err));
}

module.exports.getReposByUsername = getReposByUsername;
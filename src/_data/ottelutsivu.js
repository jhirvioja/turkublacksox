require("dotenv").config();

const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN,
});

module.exports = client
  .getEntry("32wn2noMTdQ5TF1N8UzA2q")
  .then(function (entry) {
    return entry.fields.ottelut;
  });

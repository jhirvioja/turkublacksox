require("dotenv").config();

const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN,
});

module.exports = client
  .getEntry("4y2tBfuvqLZ7V3i1aXc0i6")
  .then(function (entry) {
    return entry.fields.joukkue;
  });

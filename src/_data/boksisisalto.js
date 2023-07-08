require("dotenv").config();

const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN,
});

module.exports = client
  .getEntry("5H0tuC0DC5B73u9feNOeb4")
  .then(function (entry) {
    return entry.fields.laatikonTeksti;
  });

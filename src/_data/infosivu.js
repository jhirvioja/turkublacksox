require("dotenv").config();

const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN,
});

module.exports = client.getEntry("1Qieail26uhmj1maG6Jwub").then(function (entry) {
  return entry.fields.sivu;
});

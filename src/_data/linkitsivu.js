require("dotenv").config();
const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");

const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN,
});

module.exports = client
  .getEntries({ content_type: "linkkilaatikko", order: "-sys.createdAt" })
  .then(function (entries) {
    return entries.items.reverse();
  });

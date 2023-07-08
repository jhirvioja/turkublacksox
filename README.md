# Turku Black Sox Website
![Static Badge](https://img.shields.io/badge/HTML5-orange?logo=HTML5) ![Static Badge](https://img.shields.io/badge/CSS3-blue?logo=CSS3) ![Static Badge](https://img.shields.io/badge/JavaScript-yellow?logo=JavaScript) ![Static Badge](https://img.shields.io/badge/Bootstrap-3.4.1-purple?logo=Bootstrap) ![Static Badge](https://img.shields.io/badge/jQuery-3.6.0-blue?logo=jQuery) ![Static Badge](https://img.shields.io/badge/Eleventy-2.0.1-black?logo=Eleventy)


This is a website for the Finnish non-profit amateur baseball team Turku Black Sox. It serves as a learning project, and as an example on how an Eleventy page can be built and served from a GitHub repo to GitHub Pages. Since June 2022 the site content is also pulled from Contentful, and a webhook builds the static site via GitHub Actions everytime something is published in Contentful.

🔗 [Live website](https://www.turkublacksox.fi)

🔗 <a href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.turkublacksox.fi%2F" target="_blank" rel="nofollow">PageSpeed Insights Score</a>

## Launch 🚀

**June 2022 Update**: per the addition of fetching data from Contentful, you can no longer run this project unless you have the right `CTFL_SPACE` and `CTFL_ACCESSTOKEN` envs.

The following instructions expect that you have some experience of using [Node.js, npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and a terminal of your choice.

In terminal:

1. Use the command `nvm use` to choose the right Node version which is stated in this project's .nvmrc-file (the version is v18.16.0, ymmv with different versions but please note Eleventy requires Node 12 or newer)
2. Use the command `npm install` to install dependencies
3. Use the command `npm run serve` to run the site locally
4. Go to any browser and visit http://localhost:8080
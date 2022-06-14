# Turku Black Sox Eleventy Website

This is a website for the Finnish non-profit amateur baseball team Turku Black Sox. It serves as a learning project for me personally, and as an example of how an Eleventy page can be built and served from a GitHub repo to GitHub Pages.

## Live

Live website that will be updated by the team can be found at [www.turkublacksox.fi](https://www.turkublacksox.fi). The content is in Finnish, sorry!

## Launch

**Update**: per the addition of fetching data from Contentful, you can no longer run this project unless you have the right `CTFL_SPACE` and `CTFL_ACCESSTOKEN` envs.

The following instructions expect that you have some experience of using [Node.js, npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and a terminal of your choice.

In terminal:

1. Use the command `nvm use` to choose the right Node version which is stated in this project's .nvmrc-file (the version is v16.14.0, ymmv with different versions but please note Eleventy requires Node 12 or newer)
2. Use the command `npm install` to install dependencies
3. Use the command `npm run serve` to run the site locally
4. Go to any browser and visit http://localhost:8080

## Contact / Improvements

If you see something that needs to be addressed, please do a pull request and/or contact me, I am interested in feedback!

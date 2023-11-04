const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const {documentToHtmlString} = require('@contentful/rich-text-html-renderer');
const { BLOCKS } = require('@contentful/rich-text-types');
const htmlmin = require("html-minifier");

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => 
      `<img
        class="img-responsive"
        style="padding:20px;margin-left:auto;margin-right:auto"
        src="${node.data.target.fields.file.url}?w=800"
        alt=${node.data.target.fields.description}
      />`
  }
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/manifest.json");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addFilter("renderRichTextAsHtml", (value) => documentToHtmlString(value));
  eleventyConfig.addFilter("renderRichTextWithAssets", (value) => documentToHtmlString(value, options));

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath && outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: "src"
    }
  }
};

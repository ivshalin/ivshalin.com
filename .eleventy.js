const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");
const cacheBuster = require("@mightyplow/eleventy-plugin-cache-buster");
const CleanCSS = require("clean-css");
const htmlMinifier = require("html-minifier");

const DIR_INPUT = "src";

module.exports = function(eleventyConfig) {
  // Add plugins
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ["md"],
    alwaysWrapLineHighlights: false
  });
  eleventyConfig.addPlugin(inclusiveLangPlugin);
  eleventyConfig.addPlugin(cacheBuster({}));

  // Add filters
  eleventyConfig.addFilter(
    "cssmin",
    code => new CleanCSS({}).minify(code).styles
  );

  // Minify html code
  eleventyConfig.addTransform("html-minify", function(content, outputPath) {
    return outputPath && outputPath.endsWith(".html")
      ? htmlMinifier.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        })
      : content;
  });

  return {
    dir: {
      input: DIR_INPUT,
      layouts: "layouts"
    },
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"]
  };
};

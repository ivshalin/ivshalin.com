module.exports = function() {
  return {
    dir: {
      input: "src",
      layouts: "layouts"
    },
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"]
  };
};

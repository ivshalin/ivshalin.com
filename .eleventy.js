module.exports = function(config) {
    config.addPassthroughCopy('src/styles');

    return {
        dir: {
            input: 'src',
            layouts: 'layouts',
            output: '_public',
            includes: 'includes'
        },
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        templateFormats: ['md', 'njk']
    };
};

module.exports = function(config) {
    config.addPassthroughCopy('src/styles');
    config.addPassthroughCopy('src/**/*.(jpg)');

    return {
        dir: {
            input: 'src',
            layouts: 'layouts',
            output: '_public',
            includes: 'includes',
            data: 'data'
        },
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        templateFormats: ['md', 'njk']
    };
};

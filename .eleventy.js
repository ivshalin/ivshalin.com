module.exports = function() {
    return {
        dir: {
            input: 'src',
            layouts: 'layouts',
            output: '_public'
        },
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        templateFormats: ['md', 'njk']
    };
};

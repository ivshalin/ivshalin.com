module.exports = function(config) {
    config.addPassthroughCopy('src/styles');
    config.addPassthroughCopy('src/**/*.(jpg)');

    config.addFilter('readableDate', date => {
        const month = date.toLocaleString('default', { month: 'long' });
        return `${month} ${date.getDate()}, ${date.getFullYear()}`;
    });

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

module.exports = function(config) {
    config.addPassthroughCopy('src/styles');
    config.addPassthroughCopy('src/**/*.(jpg)');

    config.addFilter('readableDate', date => {
        const month = date.toLocaleString('default', { month: 'long' });
        return `${month} ${date.getDate()}, ${date.getFullYear()}`;
    });

    config.addFilter('readingTime', (rawText, options = { speed: 200 }) => {
        const minutesForEmoji = 5;
        const textLength = rawText.replace(/(<([^>]+)>)/gi, '').length;
        const totalMinutes = Math.ceil(textLength / options.speed);
        const emojisString = Array.from({ length: Math.ceil(totalMinutes / minutesForEmoji) })
            .fill('⏳')
            .join('');

        return `${emojisString} ${totalMinutes} min`;
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

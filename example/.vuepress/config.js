const path = require('path')

module.exports = {
    base: '/xdhan/',
    theme: path.resolve(__dirname, '../../'),
    title: 'Hello VuePress',
    description: 'Just playing around',
    markdown: {
        lineNumbers: true
    },
    // permalink: "/:year/:month/:day/:slug",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'post', link: '/post/' },
            { text: 'qq', link: '/post/qq' },
        ]
    }
}
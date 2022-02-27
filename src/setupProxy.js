const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/subscriptions', {
            target: 'https://youtube.googleapis.com/youtube/v3/',
            changeOrigin: true,
        })
    );
};

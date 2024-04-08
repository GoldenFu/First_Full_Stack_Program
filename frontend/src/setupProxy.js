const {createProxyMiddleware: proxy} = require('http-proxy-middleware');

// 当访问3000端口的时候进到这个js文件
module.exports = function(app){
    app.use(
        proxy('/api',{
            target:'http://localhost:8080',
            changeOrigin:true,
            pathRewrite:{'^/api':''}
        })

    )
}
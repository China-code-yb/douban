module.exports={
    devServer:{
        proxy:{
            '/douban':{
                target:'https://api.douban.com',
                secure:false,
                changeOrigin:true,
                pathRewrite:{
                    '^/douban':''
                },
                cookieDomainRewrite:{
                    "*":"127.0.0.1"
                },
            },
            '/mv':{
                target:'https://movie.douban.com/j',
                secure:false,
                changeOrigin:true,
                pathRewrite:{
                    '^/mv':''
                },
            },
        }
    }
}
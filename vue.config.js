/*
module.exports = {
	transpileDependencies: ['vuetify'],
	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].title = 'Board'
			return args
		})
	},
	devServer: {
		overlay: false,
	},
}
*/


// vue.config.js
module.exports = {
	  lintOnSave: false,//yjsohn
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Board'
      return args
    })
  },
  devServer: {
  overlay: false,
  
  proxy: {
      '/api': {
        //target: 'http://10.10.1.4:8090', // WAS 서버 Private IP
		target: 'http://10.10.1.50:8090', // LB Private IP
        changeOrigin: true,
        pathRewrite: {'^/api': ''},
      },
    },
  },




/*
// vue.config.js
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
}
*/

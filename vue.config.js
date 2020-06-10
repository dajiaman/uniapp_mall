const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const IS_DEV = ['development'].includes(process.env.NODE_ENV)


module.exports = {
	
	publicPath: IS_PROD ? '/uniapp_mall' : '/',
	
  devServer: {
    // hot: true,
    // clientLogLevel: 'warning',
    // overlay: {
    //   warnings: true,
    //   errors: true
    // }
  }
}

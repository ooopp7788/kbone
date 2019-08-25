// 配置说明：https://developers.weixin.qq.com/miniprogram/dev/extended/kbone/quickstart.html#%E7%BC%96%E5%86%99-webpack-%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE
module.exports = {	
	origin: 'https://test.miniprogram.com',	
	entry: '/',	
	router: {		
		index: [
			'/',
		],
	},	
	redirect: {		
		notFound: 'index',		
		accessDenied: 'index',
	},
	generate: {
        appWxss: 'none',
	},
	runtime: {
		wxComponent: 'noprefix',
	},
	app: {
		navigationBarTitleText: 'miniprogram-project',
	},	
	global: {},	
	pages: {},	
	optimization: {
		domSubTreeLevel: 10,
		
		elementMultiplexing: true,
		textMultiplexing: true,
		commentMultiplexing: true,
		domExtendMultiplexing: true,

		styleValueReduce: 5000,
		attrValueReduce: 5000,
	},	
	projectConfig: {
		appid: '',
        projectname: 'kbone-demo3',
	},	
	packageConfig: {
		author: 'wechat-miniprogram',
	},
}
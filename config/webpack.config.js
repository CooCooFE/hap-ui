var path = require('path')

var map = require('hapdev-ui')

function getAbsPath(conf){
	const _conf = {}
	for(let i in conf){
		_conf[i] = path.resolve(__dirname,'../node_modules/hapdev-ui/',conf[i])
	}
	return _conf
} 

function postHook (webpackConf) {
	webpackConf.resolve.alias = {
		button: path.resolve(__dirname,'../components/button/index'),
    titleBar: path.resolve(__dirname,'../components/hap-titleBar/index'),
		lightbox: path.resolve(__dirname,'../components/lightbox/index'),
	  searchbar: path.resolve(__dirname,'../components/searchbar/index'),
    tabBar: path.resolve(__dirname,'../components/tabBar/index'),
    checkbox: path.resolve(__dirname,'../components/checkbox/index'),
    checkboxList: path.resolve(__dirname,'../components/checkboxList/index'),
    toast: path.resolve(__dirname,'../components/toast/index')
	}

	//webpackConf.resolve.alias = getAbsPath(map)
}

module.exports = {
  postHook
}
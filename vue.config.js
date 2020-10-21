module.exports = {
	devServer: {
		port: 8090,
		proxy: {
			'^/api': {
				target: 'http://api.4yue.top/index.php/',
				ws: true,
				changeOrigin: true
			}
		}
	}
}

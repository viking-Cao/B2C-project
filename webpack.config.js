module.exports = {
	//配置需要打包的文件
	entry: {
		"project":"./public/react/shop/project.js",
	},
	//配置;打包之后的文件信息
	output: {
		path: __dirname + "/public/dist",
		filename: "[name].js",
		chunkFilename: "[name].js"
	},
	//配置source-map
	devtool: "source-map",

	//配置loader
	module: {
		loaders: [
			//配置哪些文件需要通过babel来进行转换
			{
				test: /\.js$/,
				exclude: /node_modules|server|dao|routes/,
				loader: "babel"
			}, {
				test: /\.css$/,
				loader: "style!css"
			}, {
				test: /\.less$/,
				loader: "style!css!less"
			}
		]
	}
};
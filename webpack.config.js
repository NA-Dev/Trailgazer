var Webpack = require('webpack');
var path = require("path");
var PUBLIC_DIR   = path.join(__dirname, "public"),
    SRC_DIR = path.join(__dirname, "src");
 
module.exports = {
	context: SRC_DIR,
	entry: "./main.js",

	output: {
		path:     PUBLIC_DIR,
		filename: "bundle.js"
	},

	resolve: {
		extensions: ['.js']
  },
  
  plugins: [new Webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': process.env.ENV,
			'keyMaps': process.env.keyMaps,
			'keyTrails': process.env.keyTrails,
			'keyWeather': process.env.keyWeather
		},
		
		sourceMap: false,
	})]
};
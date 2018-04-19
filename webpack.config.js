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
			'NODE_ENV': JSON.stringify(process.env.ENV),
			'keyMaps': JSON.stringify(process.env.keyMaps),
			'keyTrails': JSON.stringify(process.env.keyTrails),
			'keyWeather': JSON.stringify(process.env.keyWeather)
		},
		
		module: false,
	})]
};
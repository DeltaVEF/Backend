module.exports = {
	"env": {
		"es6": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"parser": "babel-eslint",
	"parserOptions": {
		"sourceType": "module"
	},
	"plugins": [
		"babel"
	],
	"rules": {
		"babel/generator-star-spacing": 1,
		"babel/new-cap": 1,
		"babel/array-bracket-spacing": 1,
		"babel/object-curly-spacing": 1,
		"babel/object-shorthand": 1,
		"babel/arrow-parens": 1,
		"babel/no-await-in-loop": 1,
		"babel/flow-object-type": 1,
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		]
	}
};

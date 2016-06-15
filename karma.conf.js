var path = require('path');

module.exports = function(config) {
	config.set({
		basePath: '',
    	browsers: ['Chrome'], //run in Chrome
    	files: [
      		'test/**/*-test.js'
    	],
		plugins: ['karma-mocha', 'karma-babel-preprocessor', 'karma-browserify', 'karma-coverage', 'karma-opera-launcher', 'karma-chrome-launcher', 'karma-firefox-launcher'],
		files: [
			'node_modules/requirejs/require.js'
		],
    	frameworks: ['mocha'],

    	preprocessors: {
      		'test/**/*-test.js': ['babel', 'browserify']
    	},
		babelPreprocessor: {
	      	options: {
	        	sourceMap: 'inline',
	        	presets: [ 'es2015', 'stage-1'],
	        	plugins: []
	      	}
	    },

    	reporters: ['coverage', 'progress'], //report results in this format

    	coverageReporter: {
      		reporters: [
        		{
          			type: 'text-summary'
        		},
        		{
          			type: 'html',
          			dir: 'coverage'
        		}
      		]
    	},

		// web server port
	    port: 9876,

	    // enable / disable colors in the output (reporters and logs)
	    colors: true,

	    // level of logging
	    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	    logLevel: config.LOG_INFO,

	    // enable / disable watching file and executing tests whenever any file changes
	    autoWatch: true,

	    // Continuous Integration mode
	    // if true, Karma captures browsers, runs the tests and exits
	    singleRun: false
  });
};

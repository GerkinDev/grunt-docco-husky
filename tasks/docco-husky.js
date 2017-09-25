// grunt-docco-husky
// https://github.com/DavidSouther/grunt-docco-husky
//
// Copyright (c) 2012 Vy HOANG
// Licensed under the MIT license.

module.exports = function(grunt) {

	var docco = require('docco-husky');
	var _ = require('underscore');

	// ### TASKS
	grunt.registerMultiTask('docco_husky', 'Docco-husky processor.', function docco_husky() {
		let options;
		
		// Getting the configs.
		options = grunt.config(['docco-husky', this.target, 'options']);
		if (typeof options === 'object') {
			grunt.verbose.writeln('Using "' + this.target + '" Docco-husky options.');
		} else {
			grunt.verbose.writeln('Using master Docco-huskey options.');
			options = grunt.config('docco_husky');
			options.files = grunt.file.expand(options.files, options.files.src);
		}

		grunt.verbose.writeflags(options, 'Options');

		const done = this.async();
		docco.document(options, (err, result, code) => {
			grunt.log.writeln("Doccoed husky [" + src.join(", ") + "]; " + err ? err : "(No errors)" + "\n" + result + " " + code);
			done();
		});
	});
};

import gulp from 'gulp';
import jsonminify from 'gulp-json-minify';
import util from 'gulp-util';

import {Task} from './../task';

import {paths} from './../paths';

export class JsonTask extends Task {
	static task() {
		return gulp.src(paths.jsonSource)
			.pipe(jsonminify())
			.pipe(gulp.dest(paths.jsonOutput));
	}
}

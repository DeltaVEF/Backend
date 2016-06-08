import babel from 'gulp-babel';
import changed from 'gulp-changed';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';

import {Task} from './../task';

import {paths} from './../paths';

export class BabelTask extends Task {
    static task() {
        return gulp.src(paths.source)
            .pipe(plumber())
            .pipe(changed(paths.output))
            .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.output));
    }
}

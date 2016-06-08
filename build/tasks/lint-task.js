import eslint from 'gulp-eslint';
import eslintConfig from './../../.eslintrc';
import gulp from 'gulp';

import {Task} from './../task';

import {paths} from './../paths';

export class LintTask extends Task {
    static task() {
        return gulp.src(paths.source)
            .pipe(eslint({
                eslintConfig
            }))
            .pipe(eslint.format());
    }
}

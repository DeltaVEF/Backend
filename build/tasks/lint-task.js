import eslint from 'gulp-eslint';
import gulp from 'gulp';

import eslintConfig from './../../.eslintrc';
import {paths} from './../paths';
import {Task} from './../task';

export class LintTask extends Task {
    static task() {
        return gulp.src(paths.source)
            .pipe(eslint({
                eslintConfig
            }))
            .pipe(eslint.format());
    }
}

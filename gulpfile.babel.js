import gulp from 'gulp';
import runSequence from 'run-sequence';

import {BabelTask} from './build/tasks/babel-task';
import {DeleteTask} from './build/tasks/delete-task';
import {LintTask} from './build/tasks/lint-task';
import {NodemonTask} from './build/tasks/nodemon-task';

import {paths} from './build/paths';

class GulpTask {
    static init() {
        gulp.task('babel', BabelTask.task);
        gulp.task('del', DeleteTask.task);
        gulp.task('lint', LintTask.task);
        gulp.task('nodemon', NodemonTask.task);
		gulp.task('watchFiles', GulpTask.watch);
    }

    static watch() {
        gulp.watch([paths.source, paths.jsonSource], ['babel', 'json', 'lint']);
    }
}

GulpTask.init();

gulp.task('clean', ['del']);
gulp.task('watch', (callback) => runSequence('del', 'watchFiles', 'nodemon'));
gulp.task('build', (callback) => runSequence('del', 'babel'));

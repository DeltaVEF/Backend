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
    }

    static watch() {
        gulp.watch(paths.source, ['babel', 'lint']);
    }
}

GulpTask.init();

gulp.task('clean', ['del']);
gulp.task('default', runSequence('del', 'babel', 'lint'));
gulp.task('watch', runSequence('del', 'nodemon', GulpTask.watch));

//gulp.task('clean', DeleteTask.task);
//gulp.task('default', runSequence('del', 'babel', ['lint', 'nodemon']));
//gulp.task('build', runSequence(DeleteTask.task, BabelTask.task, LintTask.task));
//gulp.task('watch', runSequence(DeleteTask.task, GulpTask.watch));

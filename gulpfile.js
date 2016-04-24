'use strict'

const babel = require('gulp-babel');
const concat = require('gulp-concat');
const del = require('del');
const eslint = require('gulp-eslint');
const eslintConfig = require('./.eslintrc.js');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');

let paths = require('./build/paths');

gulp.task('babel', () => {
    return gulp.src(paths.source)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.', { sourceRoot: paths.sourcemaps }))
        .pipe(gulp.dest(paths.output));
});

gulp.task('del', () => {
    del(['dist/**/*.js']).then(paths => {
        console.log('Deleted files and folders: \n' + paths.join('\n'));
    })
});

gulp.task('lint', () => {
    return gulp.src(paths.source)
        .pipe(eslint({
            eslintConfig
        }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
})

gulp.task('nodemon', () => {
    return nodemon({
        script: 'dist/server.js',
        exec: 'babel-node'
    });
});

gulp.task('watch', () => {
    gulp.watch(paths.source, ['babel']);
});

gulp.task('default', ['babel', 'del', 'nodemon', 'watch']);

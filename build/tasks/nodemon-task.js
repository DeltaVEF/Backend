import nodemon from 'gulp-nodemon';

import {Task} from './../task';

import {paths} from './../paths';

export class NodemonTask extends Task {
    static task() {
        return nodemon({
            script: paths.compiledServer
        });
    }
}

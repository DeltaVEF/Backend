import nodemon from 'gulp-nodemon';

import {paths} from './../paths';
import {Task} from './../task';

export class NodemonTask extends Task {
    static task() {
        return nodemon({
            script: paths.compiledServer
        });
    }
}

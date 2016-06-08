import del from 'del';

import {Task} from './../task';

import {paths} from './../paths';

export class DeleteTask extends Task {
    static task() {
        return del(paths.delete).then(filePaths => console.log(`Deleted files and folders: \n${filePaths.join('\n')}`));
    }
}

import del from 'del';

import {paths} from './../paths';
import {Task} from './../task';

export class DeleteTask extends Task {
    static task() {
        return del(paths.delete).then(filePaths => console.log(`Deleted files and folders: \n${filePaths.join('\n')}`));
    }
}

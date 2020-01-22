import appRootPath from 'app-root-path';
import path from 'path';

const appRoot = appRootPath.resolve('./');

export default (dir) => path.join(appRoot, dir);
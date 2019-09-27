import appRootPath from 'app-root-path';
import path from 'path';

const appRoot = appRootPath.resolve('./');

export default () => path.join(appRoot, 'images');
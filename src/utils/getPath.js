import appRootPath from 'app-root-path';
import path from 'path';

const appRoot = appRootPath.resolve('./');

export default (dir) => { 
  if (process.env.NODE_ENV === 'production') return (`./../${dir}`);
  return path.join(appRoot, '../', dir)
}
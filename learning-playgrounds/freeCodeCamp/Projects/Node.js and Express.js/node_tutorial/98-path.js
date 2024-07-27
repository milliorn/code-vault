const path = require('path');

console.log(path.sep);

const join = path.join('/content', 'sub', 'test.txt');
console.log(join);

const basename = path.basename(join);
console.log(basename);

const resolve = path.resolve(__dirname, 'content', 'sub', 'test.txt');
console.log(resolve);

const dirname = path.dirname(join);
console.log(dirname);

const relative = path.relative(__dirname, join);
console.log(relative);

const extname = path.extname(join);
console.log(extname);

const isAbsolute = path.isAbsolute(join);
console.log(isAbsolute);

const normalize = path.normalize(join);
console.log(normalize);

const posix = path.posix;
console.log(posix);

const toNamespacedPath = path.toNamespacedPath(join);
console.log(toNamespacedPath);

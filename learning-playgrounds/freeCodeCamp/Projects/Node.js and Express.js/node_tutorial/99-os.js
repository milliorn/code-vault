const os = require('os');

const userInfo = os.userInfo();
console.log(userInfo);

const homedir = os.homedir();
console.log(homedir);

const platform = os.platform();
console.log(platform);

const cpus = os.cpus();
console.log(cpus);

const hostname = os.hostname();
console.log(hostname);

const arch = os.arch();
console.log(arch);

const endianness = os.endianness();
console.log(endianness);

const tmpdir = os.tmpdir();
console.log(tmpdir);

const type = os.type();
console.log(type);

const freemem = os.freemem();
console.log(freemem);

const networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);

const release = os.release();
console.log(release);

const totalmem = os.totalmem();
console.log(totalmem);

const uptime = os.uptime();
console.log(uptime);

const version = os.version();
console.log(version);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);
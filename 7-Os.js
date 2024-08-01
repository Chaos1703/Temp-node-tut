const os = require('os');
console.log(os.userInfo());   // info about user
console.log(os.uptime());   // time since computer started
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);
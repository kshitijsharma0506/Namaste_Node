const os = require('os');
//info about user
const user = os.userInfo();

//method return the system uptime
console.log(`The system uptime is ${os.uptime} sec`)

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)


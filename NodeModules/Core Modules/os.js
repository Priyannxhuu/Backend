const os = require('os')

console.log('OS Platform:', os.platform());
console.log('OS CPU Architecture:', os.arch());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());
console.log('Uptime:', os.uptime());
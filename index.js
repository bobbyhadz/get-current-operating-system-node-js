// EXAMPLE 1 - How to get the current Operating System using Node.js

import os from 'os';

// 👇️ if you use CommonJS require()
// const os = require('os')

console.log(os.platform()); // 👉️ linux

console.log(os.type()); // 👉️ Linux

console.log(os.release()); // 👉️ 5.19.0-41-generic

// ------------------------------------------------------------------

// // EXAMPLE 2 - Checking whether the OS is Windows, macOS or Linux

// import os from 'os';

// // 👇️ if you use CommonJS require()
// // const os = require('os')

// const operatingSystem = os.platform();

// if (operatingSystem === 'win32') {
//   console.log('The operating system is Windows');
// } else if (operatingSystem === 'darwin') {
//   console.log('The operating system is macOS');
// } else if (operatingSystem === 'linux') {
//   console.log('The operating system is Linux');
// }

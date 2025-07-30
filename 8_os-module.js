// built in modules
//1 Operating System
const os=require(`os`)
// current user Info
const user=os.userInfo()
console.log(user)
//method return the system uptime uptime in second
console.log(`The System Uptime is ${os.uptime()} seconds`);
const currentOS={
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem()
}
console.log(currentOS)
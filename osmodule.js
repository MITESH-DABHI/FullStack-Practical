// Include os module and create its object
var os = require("os");
// return the cpu architecture
console.log("CPU architecture: " + os.arch());
// It returns the amount of free system memory in bytes
console.log("Free memory: " + os.freemem());
// It return total amount of system memory in bytes
console.log("Total memory: " + os.totalmem());
//It returns OS Platform Details
console.log("OS Platform : " + os.platform());

console.log("Information About Current User : ");
// Printing os.userInfo() values
try {
  // Printing user information
  console.log(os.userInfo());
} catch (err) {
  // Printing if any exception occurs
  console.log(": error occurred" + err);
}

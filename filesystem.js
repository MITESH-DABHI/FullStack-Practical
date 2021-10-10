const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const fs = require("fs");
var filename = "";
var content = "";
var renamed_name = "";
var createFile = () => {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File Saved Successfully :");
    }
    repeat();
  });
};
var readFile = () => {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
    repeat();
  });
};
//File Creation
var createFileWizard = () => {
  console.log("/n Welcome To The FileCreation Phase : ");
  rl.question("Name Of The File :", (ans) => {
    filename = ans + ".txt";
    rl.question("Content Of The File : ", (ans) => {
      content = ans;
      createFile();
    });
  });
};
//Read File
var readFileWizard = () => {
  rl.question("Enter The File Name :", (ans) => {
    var name = ans + ".txt";
    if (filename === name) {
      readFile();
    } else {
      console.log("Enter Valid File Name :");
    }
  });
};
//Append File
var appendToFileWizard = () => {
  rl.question("Content Of The File TO Append Into file : ", (ans) => {
    fs.appendFile(filename, ans, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File Data Appended");
      }
      readFileWizard();
      repeat();
    });
  });
};
//Rename File
var renameFileWizard = () => {
  rl.question("Enter File name You Want TO rename :", (ans) => {
    rl.question("Enter New File Name :", (ans) => {
      renamed_name = ans + ".txt";
      fs.rename(filename, renamed_name, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File Renamed ");
        }
        repeat();
      });
    });
  });
};
//Delete File
var deleteFileWizard = () => {
  rl.question("Enter File Name You Want To Delete :", (ans) => {
    filename = ans + ".txt";
    fs.unlink(filename, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File Deleted.");
      }
      repeat();
    });
  });
};

var instruction = () => {
  console.log("\n Enter 1 To Create a New File :");
  console.log("\n Enter 2 To read The Content of a file :");
  console.log("\n Enter 3 To append to an existing file :");
  console.log("\n Enter 4 to rename a file :");
  console.log("\n Enter 5 to delete a file :");
  console.log("\n Enter 6 to Exit :");
};

var start = () => {
  rl.question("Enter Your Choice :", (answer) => {
    if (answer === "1") {
      createFileWizard();
    } else if (answer === "2") {
      readFileWizard();
    } else if (answer === "3") {
      appendToFileWizard();
    } else if (answer === "4") {
      renameFileWizard();
    } else if (answer === "5") {
      deleteFileWizard();
    } else if (answer === "6") {
      rl.close();
    }
  });
};
var repeat = () => {
  instruction();
  start();
};
console.log("Welcome File System :");
repeat();

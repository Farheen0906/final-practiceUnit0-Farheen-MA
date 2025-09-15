//import readline-sync
const input = require("readline-sync");

// Display welcome message
let introMessage = "Welcome to the Study Timer Application!"; 
console.log(introMessage);

// ************Building Arrays & Using arrays***************
//Display To-Do List
//Array is used to store the to do list
let taskArray = [ "0-Data Types", " 1-Arrays", " 2-Objects" ];
console.log( "To-Do list :" + taskArray ); 
let taskSelected = input.questionInt( "Select the task from the above list" );
//Elements in the array are accessed by index using bracket notation
console.log( "Task Selected is:" + taskArray[taskSelected]);

let taskArray = push("3- Dream Application ");
console.log(taskArray);


// Creating an array of motivational messages.
const messages = ["Keep going!", "You're doing great!", "Stay focused!", "Don't give up", "Believe in yourself", "Embrace your potential"];


//      *********** Values, Data Types, and Operations *********

// Taking the input from user in number format to store in variables studyTime and breakTime.
console.log("Available study intervals are : 25 minutes, 30 minutes, 50 minutes");
console.log("Available break intervals are : 5 minutes, 10 minutes");
let studyTime = input.questionInt("Enter your preferred study minutes\t"); // number data type
let breakTime = input.questionInt("Enter your preferred break minutes\t"); // number data type



// *********** Creating and Using Objects ****************
// An object to hold the details of the current session 
const timerSettings = {
  study: studyTime * 60 ,
  break: breakTime * 60 ,
};

// ***************** Using Arrays and math modules **********************
// A function to pick a random motivational message from the array.
function randomMessage() {
    // Math.random and Math.floor generate a random index.
    //.length() function is used to find the length of the array "messages"
    let index = Math.floor(Math.random() * messages.length);
    // using array index to access element
    return messages[index]; 
}

// **************** Control Structures and Logic **************
// Function to start a study session and decide when to take a break.
let sessionsCompleted = 0;
function startPomodoro() {

    const red = "\x1b[31m";
    const reset = "\x1b[0m";
   
    // ********** Stringing Characters Together **********
    // Combining string and variables to print a message using '+' operator(string concatenation).
    console.log("*************Starting work session for " + studyTime + " minutes**********");
    //Using template literal and unicode to change the color of the text
    console.log(`${red} Study Countdown Starts: ${timerSettings.study} Seconds left ${reset}`);

    // Simulate the end of work session.
    sessionsCompleted++; // incrementing session count (operation)
    //setTimeout() is used here to pause the execution for the next set of code to simulate real working study session and break session
    setTimeout(() =>{
         console.log("Work session complete! Total sessions completed : " + sessionsCompleted );
        // Show random motivational message from the array.
        console.log("Motivational message: " + randomMessage()+ `\u{1F389}`);

// ******Control structure: decide what to do next*******
        if (sessionsCompleted === 4) { // after 4th session = long break
            console.log("*******************Take a long break of 30 minutes!*******************");
        } else {
    console.log("***************Take a short break of " + breakTime + " minutes.*****************");
    console.log(` ${red} Break Countdown Starts: ${timerSettings.break} seconds left ${reset}`);
    }
},10000);
}

// Test the program:
startPomodoro(); //run once
setTimeout(() =>{startPomodoro()},15000); // run again to see session count increase 2 - using setTimeout() to pause the execution for 10 seconds
//startPomodoro(); // run again to see session count increase 3
//startPomodoro(); // After 4 cycles prompt user to take longer break

// 1. Display the To-Do list and set the variable task selected
// 2. Set up variables for study time, break time, and session count.
// 3. Store motivational messages in an array.
// 4. Create an object to hold timer settings.
// 5. Write a function to start a study session.
// 6. Inside the function, update session count and log a random message.
// 7. Use a control structure (if/else) to decide if the user should take a break.
// 8. Test everything with console.log.
//***************************** Pseudocode ***************************/
/*
START

BEGIN Study-Timer-App

// Step 1: Display the current To-Do List.

DISPLAY “To-Do List: Assignment1, Assignment2, Assignmednt3”

PROMPT ”Please select one item:”

INPUT taskSelected

//Step 2: Store motivational messages in an array.

let messages = ["Keep Going" ,"You are doing great"...]

//Step 3: Set up variables for study time, break time, and session count.

DISPLAY “ Available times : Studytime-25min, Studytime-30min,Studytime-40min”

PROMPT “Please select a time:”

INPUT studyTime

DISPLAY “ Available times : breakTime-5min, breakTime-10min”

PROMPT “Please select a time:”

INPUT breakTime

let sessionCount = 0

// Step 4 : Create an object to hold timer settings.

 OBJECT timmerSetting { study : studyTime * 60,  break : breakTime * 60 }

//Step 5 :  Write a function to start a study session.

startPomodoro()

DISPLAY “Session Started!"

DISPLAY "countdown"

// Step 6 :Inside the function, update session count and log a random message.
sessionCount++

DISPLAY "Session completed and total numnber of sessions completed"

DISPLAY "Motivational message"

//Step 7 :Use a control structure (if/else) to decide if the user should take a break.

IF ( sessionCompleted === 4) THEN

DISPLAY "Take longer break 30 minutes"

ELSE

DISPLAY “Start a short break”

//Step 8:Test everything with console.log()

 TEST the Function

END
*/

// =========================== Study Timer App ===============================

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

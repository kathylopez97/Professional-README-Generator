// This Includes packages needed for this application
// const is a keyword used to declare a variable that cannot be reassigned a new value
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require('./utils/generateMarkdown.js'); 
console.log("Welcome to creating your MYREAD generator")
console.log ("Follow the next steps to create your own README for your next project!")

// An array of questions for user input to fill out while creating the READMe generator 
const questions = [
    // Question 1 : Name of the Project Title
    {
        type: "input",
        name: "title",
        message:"What is the name of your Project Title?:",
        // This validates the property if ther user provided a value
        validate: my_title => {
            if (my_title) {
                return true;
        // This write the console log variable if the user does NOT provide a variable to create a title 
            } else {
                console.log ('Enter your Project title to continue')
                return false;
            }
        }

    },
    // Question 2 :What is the description of the project?
    {
        type: "input",
        name: "description",
        message:"Provide a brief description for your project:",
          validate: my_description => {
            if (my_description) {
                return true;

             } else {
            console.log ('Enter the description of the project title to continue');
            return false;
            }
        }
    },
 // Question 3: What are the Instructions for installation?
 {
    type: "input",
    name: "installation",
    message:  "What installation did you used to create your project?:",
      validate: my_installation => {
        if (my_installation) {
            return true;

         } else {
        console.log ('Enter the instructions to install your project here ');
        return false;
         }
    }
    // Question 4: What test did you run?
},
{
     type: "input",
     name: "test",
    message:  "What kind of tests did you run for your project?:",
    validate: my_test => {
    if (my_test) {
        return true;

     } else {
    console.log ('Name the test you ran to create your project.');
    return false;
}
}

    }, 
    // Question 5 : Usage Information ?
    {
        type: "input",
        name: "usage",
        message:  "What was the usage information used to create this project?:",
          validate: your_usage => {
            if (your_usage) {
                return true;
    
             } else {
            console.log ('List what you used to create your project here ');
            return false;
        }
    }
    
        }, 

// Question 6: What license is used?
     {
        type: `list`,
        name: `license`,
        message:`Choose a license that is best used for your project:`,
        choices:[
             'MIT',
            `GNU GPL v3`,
            `Mozilla Public License 2.0`,
            `Attribution License (BY)`,
            `None of the above`,   
        ],
        validate: my_license => {
            if (my_license) {
                return true;
                
             } else {
            console.log ('Pick a license for your project');
            return false;
             }
        }
    },
    // Question 7:Contributing 
    {
        type: "input",
        name: "Contributing",
        message:"Contributing:",
        validate: my_contribution => {
            if (my_contribution) {
                return true;

             } else {
            console.log ('Enter your username');
            return false;
        }
    }
    },
     
    //Question 8: WHat is your email address?
    {
        type: "input",
        name: "github",
        message:"What is your github link?:",
        validate: github_input => {
            if (github_input) {
                return true;

             } else {
            console.log ("Enter your github link");
            return false;
        }
    }
    },
 
    //Question 9: WHat is your email address?
    {
        type: "input",
        name: "email",
        message:"What is your email?:",
        validate: email_input => {
            if (email_input) {
                return true;

             } else {
            console.log ("Enter your email address");
            return false;
        }
    }
    },
];

//This function create the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err) =>  {
    if (err) {
        return console.log(err);
    }
    // This console log write the message after complete the array of questions
    console.log("Great job! Your README file is now generated");
    
    });
    
    };
     
    // This  function to initialize app
    // initalize means set to the value or put in the condition appropriate to the start of an operation.
    function init() {
        inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput));
        });
    
        };
    
    // This is function call to initialize app
    init(); 
    
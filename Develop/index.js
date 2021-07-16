// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Please provide brief description of your project.",
        name: "projectDescription"
    },
    {
        type: "input",
        message: "Please provide an installation instruction.",
        name: "installationInstruction"
    },
    {
        type: "input",
        message: "Please provide an usage information",
        name: "usageInstruction"
    },
    {
        type: "list",
        message: "Please choose a license from the list below:",
        choices: ["MIT License", "Apache License 2.0", "Mozilla Public License 2.0", "GNU General Public License, version 3", "No License"],
        name: "license"
    },
    {
        type: "input",
        message: "Please enter current year.",
        name: "year"
    },
    {
        type: "input",
        message: "Please enter your full name.",
        name: "fullname"
    },
    {
        type: "input",
        message: "Please provide a contribution guideline.",
        name: "contribution"
    },
    {
        type: "input",
        message: "Please provide a test instruction.",
        name: "test"
    },
    {
        type: "input",
        message: "Please enter your email.",
        name: "email"
    },
    {
        type: "input",
        message: "Please enter your github username.",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter your linkedin username.",
        name: "linkedin"
    }
];

// Users are prompted with questions and get their answers
const userPrompt = () => {
    inquirer.prompt((questions)).then((answers) => {
        writeToFile('readme_generator.md', generateMarkdown(answers));
    });
}

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err):console.log("It successfully created README file!")
    });
};

// Create a function to initialize app
function init() {
    userPrompt();
};

// Function call to initialize app
init();

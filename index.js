//get libraries to use
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHtml = require('./units/generatehtml')
const employee = require('./library/Employee');
const engineer = require('./library/Engineer');
const intern = require('./library/Intern');
const manager = require('./library/Manager');

//create array of qestions for each employee
const questions = {
    menu: [
        {
        type: "List",
        message: "Select from the following:",
        name: "menu",
        choices: ["Add an Engineer", "Add an Intern", "Finish Building my Team"],
    }
    ],
    manager: [
    {
        type: "input",
        message: "What is the Team Manager's name?",
        name: "managerName",
    },
    {
        type: "input",
        message: "What is the Manager's employee ID?",
        name: "managerID",
    },
    {
        type: "input",
        message: "What is the Manager's email address?",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "What is the Manager's office number?",
        name: "managerOffice",
    },
    ],
    intern: [{
        type: "input",
        message: "What is the Intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is the Interns email?",
        name: "internEmail",
    },
    {
        type: "input",
        message: "What school did the Intern attend?",
        name: "internSchool"
    },
    ],
    engineer: [{
        type: "input",
        message: "What is the Engineer's name?",
        name: "engineerName",
    },
    {
        type: "input",
        message: "What is the Engineer employee ID?",
        name: "engineerID",
    },
    {
        type: "input",
        message: "What is the Engineer's email?",
        name: "engineerEmail",
    },
    {
        type: "input",
        message: "What is the Engineer's GitHub username?",
        name: "engineerGithub"
    },
    ],
};

//create function to write the html
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

//create the function to start the program
function init() {
}
//function call to initilize app
init();


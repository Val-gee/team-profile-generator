//get libraries to use
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const template = require('./src/template');
const path = require('path');
const dist = path.resolve(__dirname, 'dist');
const distPath = path.join(dist, 'team.html');

const team = [];

//create array of qestions for each employee
const questions = {
    manager: [
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "managerName",
        },
        {
            type: "input",
            message: "What is the team manager's employee ID?",
            name: "managerID",
        },
        {
            type: "input",
            message: "What is the team manager's email address?",
            name: "managerEmail",
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "managerOffice",
        },
        {
            type: "list",
            message: "Which type of team member would you like to add?:",
            name: "menu",
            choices: ["Add an Engineer", "Add an Intern", "Finish Building my Team"],
        },
    ],
    intern: [{
        type: "input",
        message: "What is your intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is your interns employee ID?",
        name: "internID",
    },
    {
        type: "input",
        message: "What is your interns email?",
        name: "internEmail",
    },
    {
        type: "input",
        message: "What is your intern's school?",
        name: "internSchool"
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?:",
        name: "menu",
        choices: ["Add an Engineer", "Add an Intern", "Finish Building my Team"],
    }
    ],
    engineer: [{
        type: "input",
        message: "What is your engineer's name?",
        name: "engineerName",
    },
    {
        type: "input",
        message: "What is your engineer employee ID?",
        name: "engineerID",
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "engineerEmail",
    },
    {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "engineerGithub"
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?:",
        name: "menu",
        choices: ["Add an Engineer", "Add an Intern", "Finish Building my Team"],
    },
    ],
};

function addIntern() {
    return inquirer.prompt(questions.intern)
        .then((answers) => {
            let employee = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
            employee.special = answers.internSchool
            team.push(employee)
            if (answers.menu === "Add an Engineer") {
                return addEngineer()
            } else if (answers.menu === "Add an Intern") {
                return addIntern()
            } else {
                buildTeam();
            }
        })
}


function addEngineer() {
    return inquirer.prompt(questions.engineer)
        .then((answers) => {
            let employee = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub)
            employee.special = answers.engineerGithub
            team.push(employee)
            if (answers.menu === "Add an Engineer") {
                return addEngineer()
            } else if (answers.menu === "Add an Intern") {
                return addIntern()
            } else {
                buildTeam();
            }
        })
}

function buildTeam() {
    console.log("Generating HTML file");
    if (!fs.existsSync(dist)) {
        fs.mkdirSync(dist)
    } 
    fs.writeFileSync(distPath, template(team), 'utf-8')
}

//create the function to start the program
function init() {
    inquirer.prompt(questions.manager)
        .then((answers) => {
            let employee = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice)
            employee.special = answers.managerOffice
            team.push(employee)
            if (answers.menu === "Add an Engineer") {
                return addEngineer()
            } else if (answers.menu === "Add an Intern") {
                return addIntern()
            } else {
                buildTeam();
            }
        })

}
//function call to initilize app
init();


//get libraries to use
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
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
    fs.writeFileSync("./dist/team.html", `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="Description" content="Enter your description here"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<link rel="stylesheet" href="./css/style.css">
<title>Team Profile Generator</title>
</head>
<body>
    `)
    for (let i = 0; i < team.length; i++){
        fs.appendFileSync("./dist/team.html", `
        <div>${team[i].name}</div>
        <div>${team[i].id}</div>
        <div>${team[i].email}</div>
        <div>${team[i].special}</div>
        `)
    }

    fs.appendFileSync("./dist/team.html", `   
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
</body>
</html>
    `)
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


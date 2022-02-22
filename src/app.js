"use strict";

const inquirer = require('inquirer');
const {generateHTML, makeCard, writeToFile } = require('./generateHTML')


function managerQuestions (){
    return inquirer
    .prompt([
        {
            type: "input",
            name: "manager_name",
            message: "Enter team manager\'s name."
        },
        {
            type: "input",
            name: "manager_id",
            message: "Enter manager's ID."
        },
        {
            type: "input",
            name: "manager_email",
            message: "Enter manager's email."
        },
        {
            type: "input",
            name: "manager_office_number",
            message: "Enter manager's office number."
        },
        {
            type: "list",
            name: "choose_employee",
            choices: ["Engineer", "Intern"]
        }
    ])
    .then(answers => {
        // Make card with data and add it to the array
        makeCard(answers);
        if (answers.choose_employee == "Engineer") {
            console.log(answers)
            engineerQuestions();
        } else {
            internQuestions();
        }
    })
}
    

function engineerQuestions () {
    inquirer
    .prompt([
        {
            type: "input",
            name: "engineer_name",
            message: "Enter engineer's name."
        },
        {
            type: "input",
            name: "engineer_id",
            message: "Enter engineer's ID."
        },
        {
            type: "input",
            name: "engineer_email",
            message: "Enter engineer's Email."
        },
        {
            type: "input",
            name: "engineer_github",
            message: "Enter engineer's GitHub username."
        },
        {
            type: "list",
            name: "choose_employee",
            choices: ["Engineer", "Intern", "Build Team"]
        }
    ])
    .then(answers => {
        makeCard(answers);
        if (answers.choose_employee === "Engineer") {
            console.log(answers);
            engineerQuestions();
        } else if (answers.choose_employee === "Intern") {
            console.log(answers)
            internQuestions();
        } 
        else {
            writeToFile();
        }
    })
}

function internQuestions () {
    inquirer
    .prompt([
        {
            type: "input",
            name: "intern_name",
            message: "Enter intern's name."
        },
        {
            type: "input",
            name: "intern_id",
            message: "Enter intern's ID."
        },
        {
            type: "input",
            name: "intern_email",
            message: "Enter intern's Email."
        },
        {
            type: "input",
            name: "intern_school",
            message: "Enter intern's school."
        },
        {
            type: "list",
            name: "choose_employee",
            choices: ["Engineer", "Intern", "Build Team"]
        }
    ])
    .then(answers => {
        makeCard(answers)
        if (answers.choose_employee === "Engineer") {
            console.log(answers);
            engineerQuestions();
        } else if (answers.choose_employee === "Intern") {
            console.log(answers);
            internQuestions();
        } 
        else {
            writeToFile();
        }
    })
}

module.exports = { managerQuestions, internQuestions, engineerQuestions };
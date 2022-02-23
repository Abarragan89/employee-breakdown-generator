"use strict";

const inquirer = require('inquirer');
const { makeCard, writeToFile } = require('./generateHTML')

// opening manager questions
function managerQuestions (){
    return inquirer
    .prompt([
        {
            type: "input",
            name: "manager_name",
            message: "Enter team manager\'s name.",
            validate: function (input) {
                if (!input) {
                    console.log("You need input manager's name");
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            name: "manager_id",
            message: "Enter manager's ID.",
            validate: function (input) {
                if (!input) {
                    console.log("You need to input manager's ID.");
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            name: "manager_email",
            message: "Enter manager's email.",
            validate: function (input) {
                if (!input) {
                    console.log("You need to input manager's Email.");
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            name: "manager_office_number",
            message: "Enter manager's office number.",
            validate: function (input) {
                if (!input) {
                    console.log("You need to input manager's office number.");
                    return false;
                }
                return true;
            }
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
        // Decide which employee to make next
        if (answers.choose_employee == "Engineer") {
            engineerQuestions();
        } else {
            internQuestions();
        }
    })
}

// Engineer questions
function engineerQuestions () {
    inquirer
    .prompt([
        {
            type: "input",
            name: "engineer_name",
            message: "Enter engineer's name.",
            validate: function (input) {
                if (!input) {
                    console.log("You need to input engineer's name.");
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            name: "engineer_id",
            message: "Enter engineer's ID.",
            validate: function (input) {
                if (!input) {
                    console.log("You need to input engineer's ID.");
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            name: "engineer_email",
            message: "Enter engineer's Email.",
            validate: function (input) {
                if (!input) {
                    console.log("You need to input engineer's Email.");
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            name: "engineer_github",
            message: "Enter engineer's GitHub username.",
            validate: function (input) {
                if (!input) {
                    console.log("You need to input engineer's Github username.");
                    return false;
                }
                return true;
            }
        },
        {
            type: "list",
            name: "choose_employee",
            choices: ["Engineer", "Intern", "Build Team"]
        }
    ])
    .then(answers => {
        // make card and add to array
        makeCard(answers);
        if (answers.choose_employee === "Engineer") {
            engineerQuestions();
        } else if (answers.choose_employee === "Intern") {
            internQuestions();
        } 
        else {
            // Build HTML
            writeToFile();
        }
    })
}

// Intern questions
function internQuestions () {
    inquirer
    .prompt([
        {
            type: "input",
            name: "intern_name",
            message: "Enter intern's name.",
            validate: function (input) {
                if (!input) {
                    console.log("You need to input intern's name.");
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            name: "intern_id",
            message: "Enter intern's ID.",
            validate: function (input) {
                if (!input) {
                    console.log("You need to input intern's ID.");
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            name: "intern_email",
            message: "Enter intern's Email.",
            validate: function (input) {
                if (!input) {
                    console.log("You need to input intern's Email.");
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            name: "intern_school",
            message: "Enter intern's school.",
            validate: function (input) {
                if (!input) {
                    console.log("You need to input intern's school.");
                    return false;
                }
                return true;
            }
        },
        {
            type: "list",
            name: "choose_employee",
            choices: ["Engineer", "Intern", "Build Team"]
        }
    ])
    .then(answers => {
        // make card and add to array
        makeCard(answers)
        if (answers.choose_employee === "Engineer") {
            engineerQuestions();
        } else if (answers.choose_employee === "Intern") {
            internQuestions();
        } 
        else {
            // Buld HTML
            writeToFile();
        }
    })
}

module.exports = { managerQuestions, internQuestions, engineerQuestions };
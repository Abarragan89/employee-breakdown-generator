"use strict";

const inquirer = require('inquirer');


const managerQuestions = inquirer
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
            type: "list",
            name: "choose_employee",
            choices: ["Engineer", "Intern"]
        }
    ])
    .then(({ choice_employee }) => {
        if (choice_employee === "Engineer") {

        } else {
            
        }
    })


module.exports = { managerQuestions };
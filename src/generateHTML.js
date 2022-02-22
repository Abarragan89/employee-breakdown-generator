"use strict";

const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const fs = require('fs');

const employeeCards = [];

// card maker
function generateHTML() {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team</title>
            <link rel="stylesheet" type="text/css" href="node_modules/bulma/css/bulma.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </head>

        <body>
            <header>
                <div class="notification is-primary">
                <h1 class="is-size-1 has-text-centered has-text-black has-text-weight-bold">My Team</h1>
                </div>
            </header>
            <main class="container">
                <div class="columns is-multiline">
                ${employeeCards.join("\n")}
                </div>
            </main> <!-- end of column-->
        </body>
        </html>
    `
    }

function makeCard(data) {
    if (data.manager_office_number) {
    const newMan = new Manager(data.manager_name, data.manager_id, data.manager_email, data.manager_office_number)
    const card = `
    <div class="card column m-3 has-background-light">
    <header class="card-header has-background-link">
    <h2 class="title has-text-centered has-text-white is-size-4">
    ${newMan.getName()}
    <p class=" card-header-title is-size-5">
    <span class="icon">
        <i class="fas fa-solid fa-mug-hot mr-2"></i>
    </span>Team Manager</p>
    </h2>
    </header>
    <div class="card-content">
        <div class="content mb-1">
            <div class="box">
                ID: ${newMan.getId()}
            </div>
        </div>
        <div class="content mb-1">
            <div class="box">
                <p>Email: <a href="mailto:${newMan.getEmail()}">${newMan.getEmail()}</a></p>
            </div>
        </div>
        <div class="content">
            <div class="box">
                <p>Office Number: ${data.manager_office_number}</p>
            </div>
        </div>
    </div>
    </div>

    `
    employeeCards.push(card)

    } else if (data.engineer_github) {
        const newEmp = new Engineer(data.engineer_name, data.engineer_id, data.engineer_email, data.engineer_github)
        const card = `
        <div class="card column m-3 has-background-light">
        <header class="card-header has-background-link">
        <h2 class="title has-text-centered has-text-white is-size-4">
            ${newEmp.getName()}
            <p class=" card-header-title is-size-5">
                <span class="icon">
                    <i class="fas fa-solid fa-glasses mr-2"></i>
                </span>Engineer
            </p>
        </h2>
        </header>
        <div class="card-content">
            <div class="content mb-1">
                <div class="box">
                    ID: ${newEmp.getId()}
                </div>
            </div>
            <div class="content mb-1">
                <div class="box">
                    <p>Email: <a href="mailto:${newEmp.getEmail()}">${newEmp.getEmail()}</a></p>
                </div>
            </div>
            <div class="content">
                <div class="box">
                <p>GitHub: <a href="https://www.github.com/${newEmp.getGithub()}" target="_blank">${newEmp.getGithub()}</a></p>
                </div>
            </div>
        </div>
        </div>

        `
        employeeCards.push(card)        
    } else if (data.intern_school) {
        const newEmp = new Intern(data.intern_name, data.intern_id, data.intern_email, data.intern_school);
        const card = `
        <div class="card column m-3 has-background-light">
        <header class="card-header has-background-link">
        <h2 class="title has-text-centered has-text-white is-size-4">
            ${newEmp.getName()}
            <p class=" card-header-title is-size-5">
                <span class="icon">
                <i class="fas fa-solid fa-user-graduate mr-2"></i>
                </span>Intern
            </p>
        </h2>
    </header>
        <div class="card-content">
            <div class="content mb-1">
                <div class="box">
                    ID: ${newEmp.getId()}
                </div>
            </div>
            <div class="content mb-1">
                <div class="box">
                    <p>Email: <a href="mailto:${newEmp.getEmail()}">${newEmp.getEmail()}</a></p>
                </div>
            </div>
            <div class="content">
                <div class="box">
                <p>School: ${newEmp.getSchool()}</p>
                </div>
            </div>
        </div>
        </div>
        `
        employeeCards.push(card)
    }
}

// Function to write README file
function writeToFile(data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./employees.html', (generateHTML(data)), err => {
            if (err) {
                reject(err);
                return;
            }
            resolve(console.log("A file was created title 'employees.html'"))
        })
        
    });
};


module.exports = { generateHTML, makeCard, writeToFile };

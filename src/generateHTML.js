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
        </head>

        <body>
            <header class="container">
                <div class="notification is-primary">
                <h1 class="is-size-1 has-text-centered has-text-black has-text-weight-bold">My Team</h1>
                </div>
            </header>
            <main class="container">
                <div class="columns">
                ${employeeCards.join("\n")}
                </div>
            </div>
                </div> <!-- end of column-->
            </main>
        </body>
        </html>
    `
    }

function makeCard(data) {
    if (data.manager_office_number) {
    const newMan = new Manager(data.manager_name, data.manager_id, data.manager_email, data.manager_office_number)
    const card = `
    <div class="card column m-5 has-background-light">
    <header class="card-header has-background-link">
        <h2 class="card-header-title has-text-white is-size-4">
            Team Manager
        </h2>
    </header>
    <div class="card-content">
        <div class="content mb-1">
            <div class="box">
                ${newMan.getId()}
            </div>
        </div>
        <div class="content mb-1">
            <div class="box">
                <p>Email: <a href="">${newMan.getEmail()}</a></p>
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
        <div class="card column m-5 has-background-light">
        <header class="card-header has-background-link">
            <h2 class="card-header-title has-text-white is-size-4">
                Engineer
            </h2>
        </header>
        <div class="card-content">
            <div class="content mb-1">
                <div class="box">
                    ${newEmp.getId()}
                </div>
            </div>
            <div class="content mb-1">
                <div class="box">
                    <p>Email: <a href="">${newEmp.getEmail()}</a></p>
                </div>
            </div>
            <div class="content">
                <div class="box">
                <p>GitHub:<a href="https://www.github.com/${newEmp.getGithub()} target="_blank">${newEmp.getGithub()}</a></p>
                </div>
            </div>
        </div>
        </div>

        `
        employeeCards.push(card)        
    } else if (data.intern_school) {
        const newEmp = new Intern(data.intern_name, data.intern_id, data.intern_email, data.intern_school);
        const card = `
        <div class="card column m-5 has-background-light">
        <header class="card-header has-background-link">
            <h2 class="card-header-title has-text-white is-size-4">
                Intern
            </h2>
        </header>
        <div class="card-content">
            <div class="content mb-1">
                <div class="box">
                    ${newEmp.getId()}
                </div>
            </div>
            <div class="content mb-1">
                <div class="box">
                    <p>Email: <a href="">${newEmp.getEmail()}</a></p>
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
        fs.writeFile('./HTMLSample.html', (generateHTML(data)), err => {
            if (err) {
                reject(err);
                return;
            }
            resolve(console.log("File was created"))
        })
        
    });
};


module.exports = { generateHTML, makeCard, writeToFile };

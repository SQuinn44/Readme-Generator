//const required to run
const inquirer = require("inquirer");
const generatorMarkdown = require("./generateMarkdown")
const fs = require("fs");

//write to a file
const readFile = util.promisify(fs.readFile);
const writeToFole = util.promisify(fs.writeFile);

//User Questions for ReadMe
const questions = [
    {
        type: "input",
        message: "GitHub username:",
        name: "UserName",
    },
    {
        type: "input",
        message: "Email Address:",
        name: "Email",
    },
    {
        type: "input",
        message: "Project Title:",
        name: "Title",
    },
    {
        type: "input",
        message: "Project Description:",
        name: "Description",
    },
    {
        type: "input",
        message: "Installation Instructions:",
        name: "Installation",
    },
    {
        type: "input",
        message: "Usage:",
        name: "Usage",
    },
    {
        type: "list",
        message: "License: ",
        name: "License",
        choices: ['MIT','GNU','BSD']
    },
    {
        type: "input",
        message: "Contributors:",
        name: "Contributors"
    },
    {
        type: "input",
        message: "Tests:",
        name: "Tests"
    }
]

//generate user data
function getUserData() {
    return inquirer.prompt(questions)
}


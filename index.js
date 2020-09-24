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
        name: "username",
    },
    {
        type: "input",
        message: "Email Address:",
        name: "email",
    },
    {
        type: "input",
        message: "Project Title:",
        name: "title",
    },
    {
        type: "input",
        message: "Project Description:",
        name: "description",
    },
    {
        type: "input",
        message: "Installation Instructions:",
        name: "installation",
    },
    {
        type: "input",
        message: "Usage:",
        name: "usage",
    },
    {
        type: "list",
        message: "License: ",
        name: "license",
        choices: ['MIT','GNU','BSD']
    },
    {
        type: "input",
        message: "Contributors:",
        name: "contributors"
    },
    {
        type: "input",
        message: "Tests:",
        name: "tests"
    }
]

//generate user data
function getUserData() {
    return inquirer.prompt(questions)
}


//license badge choices
var licenseTxt;
var badge;
async function init() {
    try {
        const answers = await getUserData(questions);
    
        if (answers.license === "BSD"){
            badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        }
        else if (answers.license === "GNU"){
            badge = badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        }
        else if (answers.license === "MIT"){
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)'
        }
        else {
            badge = 'No License Choice Selected'
        }
        licenseTxt = await readFile('license' + answers.license + '.txt', 'utf8');
        const README = generateText(answers,badge);
        await writeToFile("README.md", README);
        console.log("README file successfully generated");
    }   catch(err) {
        console.log(err);
    }
}



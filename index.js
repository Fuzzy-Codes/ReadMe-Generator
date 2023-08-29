const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is a title of you project?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief summary of this application."
    },
    {
        type: "input",
        name: "installation",
        message: "How would you install this application and prepare to run it?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "input",
        name: "credits",
        message: "Who contributed to this applicatoin? (first and last name)"
    },
    {
        type: "list",
        name: "license",
        message: "What license is needed for this application?",
        choices: ["None", "MIT", "Apache", "GNU GPLv2", "Boost"]
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        err ? console.log(err) : console.log("README.md generated successfully!")
    })
}

function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init()
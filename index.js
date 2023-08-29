const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is a title of you project?"
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
// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const genMarkDown = require("./utils/generateMarkdown.js");
// const path = require("path");
// TODO: Create an array of questions for user input

function makeFile(answers) {
    fs.writeFile("README.md", genMarkDown(answers), (err) =>
          err ? console.log(err) : console.log(`Success!`)
        );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the name of you project?",
          name: "title",
        },
        {
          type: "input",
          message:
            "Ente a brief description.",
          name: "desc",
        },
        {
          type: "input",
          message: "What steps are needed for installation",
          name: "installation",
        },
        {
          type: "list",
          message: "What usage/license are you using?",
          choices: ["MIT", "GPI", "Apache", "none"],
          name: "license",
        },
        {
          type: "input",
          message: "List tests you've produced for your app",
          name: "tests",
        },
        {
          type: "input",
          message: "How can others contribute?",
          name: "contribute",
        },
        {
          type: "input",
          message: "Link to you github profile:",
          name: "ghubProfile",
        },
        {
          type: "input",
          message: "Enter your email address:",
          name: "email",
        },
      ])

      .then((answers) => {
        makeFile(answers)
      });
  }

init();

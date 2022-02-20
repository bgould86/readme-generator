const fs = require("fs");
const inquirer = require("inquirer");
const markdownMaker = require("./utils/markdownMaker");
//questions array
inquirer
  .prompt([
    {
      name: "title",
      type: "input",
      message: "Enter the title of your project.",
    },
    {
      name: "description",
      type: "input",
      message: "Enter a description for your application.",
    },
    {
      name: "screenshot",
      type: "input",
      message: "Enter the file path to a screenshot of your application (begin with './').",
      validate: function (input) {
        const valid = input.startsWith("./");
        return valid || "Please enter a valid file path.";
      },
    },
    {
      name: "screenshotDescription",
      type: "input",
      message: "Enter descriptive text for your screenshot.",
    },
    {
      name: "installation",
      type: "input",
      message: "Enter intstructions for installing your application.",
    },
    {
      name: "usage",
      type: "input",
      message: "Provide instructions and examples for use.",
    },
    {
      name: "license",
      type: "list",
      message: "Choose which license applies:",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      name: "contribute",
      type: "input",
      message: "Enter instructions for how to contribute to your application.",
    },
    {
      name: "tests",
      type: "input",
      message: "Enter instructions for how to test that your application is working properly.",
    },
    {
      name: "contactName",
      type: "input",
      message: "Enter the name of the person to contact if a user has questions.",
    },
    {
      name: "email",
      type: "input",
      message: "Enter an email address for that contact person.",
    },
    {
      name: "github",
      type: "input",
      message: "Enter the GitHub username for that contact person.",
    },
    {
      name: "repoLocation",
      type: "input",
      message: "Enter the URL for the GitHub repo (include https://).",
      validate: function (input) {
        const valid = input.startsWith("https://");
        return valid || "Please enter a valid website.";
      },
    },
    {
      name: "pagesLocation",
      type: "input",
      message: "Enter the URL for the GitHub pages (include https://).",
      validate: function (input) {
        const valid = input.startsWith("https://");
        return valid || "Please enter a valid website.";
      },
    },
  ])
  .then((answers) => {
    const readmeText = markdownMaker.markdownMaker(answers);
    fs.writeFile("generatedREADME.md", readmeText, (err) => (err ? console.error(err) : console.log("Success! Your README has generated.")));
  });

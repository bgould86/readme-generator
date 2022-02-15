const fs = require("fs");
const inquirer = require("inquirer");
const markdownMaker = require("./markdownMaker");
//prompt the user for questions sent as an array of objects
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
  ])
  .then((answers) => {
    const readmeText = markdownMaker.markdownMaker(answers);
    fs.writeFile("generatedREADME.md", readmeText, (err) => (err ? console.error(err) : console.log("Success!")));
  });

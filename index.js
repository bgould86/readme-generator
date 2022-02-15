const fs = require("fs");
const inquirer = require("inquirer");
const markdownMaker = require("./markdownMaker");
//prompt the user for questions sent as an array of objects
inquirer
  .prompt([
    {
      name: "bioName",
      type: "input",
      message: "Enter your name.",
    },
    {
      name: "website",
      type: "input",
      message: "Enter your website.",
      default: "https://www.hojo.com",
      validate: function (input) {
        const valid = input.startsWith("https://www.");
        return valid || "Please enter a valid website";
      },
    },
    {
      name: "about",
      type: "input",
      message: "Tell us about yourself.",
    },
  ])
  .then((answers) => {
    const makeMarkdown = markdownMaker(answers);
    fs.writeFile("bio.html", makeMarkdown, (err) => (err ? console.error(err) : console.log("Success!")));
  });

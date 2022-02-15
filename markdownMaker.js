function markdownMaker({ title, description, installation, usage, license, contribute, tests }) {
  return `# ${title}

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
- [Links](#links)

## Installation

${installation} What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

${usage} Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

## License

${license} The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

## Contribute

${contribute} If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

${tests} Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions

If your project has a lot of features, list them here.

## Links

- Here is the repo: 
- Here is the pages:
`;
}

module.exports = {
  markdownMaker,
};

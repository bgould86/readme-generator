// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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

${installation} 

## Usage

${usage} 

## License

${license} 

## Contribute

${contribute} 

## Tests

${tests} 

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

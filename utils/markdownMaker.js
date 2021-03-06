// function for adding license badge
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "APACHE 2.0") {
    return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-green.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-green.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD 3") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-green.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "None") {
    return "";
  }
}

// function to create link in table of contents if a license is used
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license !== "None") {
    licenseLink = `- [License](#license)`;
  }
  return licenseLink;
}

// function to create license section if a license is used
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license !== "None") {
    licenseSection = `## License
    
This project is licnesed by the ${license} license.`;
  }
  return licenseSection;
}

function markdownMaker({ title, description, screenshot, screenshotDescription, installation, usage, license, contribute, tests, contactName, email, github, repoLocation, pagesLocation }) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  const licenseSection = renderLicenseSection(license);

  return `# ${title} ${licenseBadge}

## Description

${description}

## Table of Contents

- [Screenshot](#screenshot)
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
- [Links](#links)
${licenseLink}

## Screenshot

![${screenshotDescription}](${screenshot})

## Installation

${installation} 

## Usage

${usage} 

## Contribute

${contribute} 

## Tests

${tests} 

## Questions

If you have any questions, please contact:

- ${contactName}
- ${email}
- [https://www.github.com/${github}](https://www.github.com/${github})

## Links

- Here is the repo: [${repoLocation}](${repoLocation})
- Here is the pages: [${pagesLocation}](${pagesLocation})

${licenseSection}
`;
}

module.exports = {
  markdownMaker,
};

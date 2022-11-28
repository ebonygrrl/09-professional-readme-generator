// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeUrl = '';  
  
  if (license === 'Apache 2.0') {
    badgeUrl = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
  } else if (license === 'MIT') {
    badgeUrl = 'https://img.shields.io/badge/License-MIT-yellow.svg';
  } else if (license === 'GPL') {
    badgeUrl = 'https://img.shields.io/badge/license-GPL-blue.svg';
  } else if (license === 'MPL 2.0') {
    badgeUrl = 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';
  }

  return badgeUrl;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let linkUrl =  '';  
  
  if (license === 'Apache 2.0') {
    linkUrl = 'https://www.apache.org/licenses/LICENSE-2.0';
  } else if (license === 'MIT') {
    linkUrl = 'https://mit-license.org/';
  } else if (license === 'GPL') {
    linkUrl = 'https://www.gnu.org/licenses/old-licenses/gpl-1.0.html';
  } else if (license === 'MPL 2.0') {
    linkUrl = 'https://www.mozilla.org/en-US/MPL/2.0/';
  }

  return linkUrl;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  let badge = renderLicenseBadge(license);
  let link  = renderLicenseLink(license);

  const output = `[![License: ${license}](${badge})](${link})
  
All code is released under the [${license} License](${link}).`;

  return output;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const getLicense = renderLicenseSection(data.license);

  let testOpt = data.tests === true ? `Here's an example of how to test this software.`: `No test available.`;

  let usageOpt = data.usage === true ? `Here are some screenshots of this project.` : `No screenshots available.`;
  
  const output = `# ${data.title} 

## Table of Contents
1. [Description](#desc)
2. [Installation](#install)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

<a name="desc"></a>
## Description 
${data.description}

<a name="install"></a> 
## Installation
${data.install}

<a name="usage"></a> 
## Usage
${usageOpt}

<a name="license"></a> 
## License
${getLicense}

<a name="contributing"></a> 
## Contributing
${data.contribute} 

<a name="tests"></a> 
## Tests
${testOpt}

<a name="questions"></a> 
## Questions
If you have any questions regarding this project, please contact me via [${data.email}](${data.email}) or my [GitHub profile](https://github.com/${data.github}).`;

  return output;
}

module.exports = generateMarkdown;
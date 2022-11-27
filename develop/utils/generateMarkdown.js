//[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
//[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/)`
//[![License: GPL](https://img.shields.io/badge/license-GPL-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
//[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://www.mozilla.org/en-US/MPL/2.0/)


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeUrl = license === '' ? '' : license;

  return badgeUrl;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let linkUrl = license === '' ? '' : license;

  return linkUrl;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badge = renderLicenseBadge;
  let link  = renderLicenseLink;

  let output = `![License: ${license}](${badge})](${link})
  
    All code is released under the [${license} License](${link}).`;

  return output;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const getLicense = renderLicenseSection(data.license);
  
  if (data.license === 'Apache 2.0') {
    renderLicenseBadge('https://img.shields.io/badge/License-Apache%202.0-blue.svg');
    renderLicenseLink('https://www.apache.org/licenses/LICENSE-2.0');
  } else if (data.license === 'MIT') {
    renderLicenseBadge('https://img.shields.io/badge/License-MIT-yellow.svg');
    renderLicenseLink('https://mit-license.org/');
  } else if (data.license === 'GPL') {
    renderLicenseBadge('https://img.shields.io/badge/license-GPL-blue.svg');
    renderLicenseLink('https://www.gnu.org/licenses/old-licenses/gpl-1.0.html');
  } else if (data.license === 'MPL 2.0') {
    renderLicenseBadge('https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg');
    renderLicenseLink('https://www.mozilla.org/en-US/MPL/2.0/');
  } else {
    renderLicenseBadge('https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg');
    renderLicenseLink('https://www.mozilla.org/en-US/MPL/2.0/');
  }

  let testOpt = data.tests === 'Yes' ? `Here's an example of how to test this software.`: `No test available.`;

  let usageOpt = data.usage === 'Yes' ? `Here's an example of how to test this software.` : `No test available.`;
  
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
### Description 
${data.description}

<a name="install"></a> 
### Installation
${data.install}

<a name="usage"></a> 
### Usage
${usageOpt}

<a name="license"></a> 
### License
${getLicense}

<a name="contributing"></a> 
### Contributing
For guidance on setting up a development environment and how to make a contribution, please contact [${data.email}](${data.email}). 

<a name="tests"></a> 
### Tests
${testOpt}

<a name="questions"></a> 
### Questions
If you have any questions regarding this project, please contact me at [${data.email}](${data.email}).`;

  return output;
}

module.exports = generateMarkdown;
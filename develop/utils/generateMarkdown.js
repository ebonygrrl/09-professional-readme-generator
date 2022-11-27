// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = license === true ? `https://img.shields.io/badge/License-MIT-yellow.svg` : ``;

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const badgeUrl = license === true ? `https://opensource.org/licenses/MIT` : ``;
  
  return badgeUrl;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache 2.0') {

  } else if (license === 'MIT') {

  } else if (license === 'GPL') {

  } else if (license === 'MPL 2.0') {

  } else {

  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const newLicense = data.license;
  
  const output = `# ${data.title}`; 
  /*
  ${data.description}
  ${data.install}
  ${data.usage}
  ${data.license} All code is released under the MIT License.
  ${data.contribute} For guidance on setting up a development environment and how to make a contribution, please contact
  ${data.tests} Here's an example of how to test this software.
  ${data.email} If you have any questions regarding this project, please contact me at
  `;*/

  return output;
}

module.exports = generateMarkdown;

//[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
//[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/)`
//[![License: GPL](https://img.shields.io/badge/license-GPL-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
//[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://www.mozilla.org/en-US/MPL/2.0/)

// https://www.apache.org/licenses/LICENSE-2.0
// https://mit-license.org/
// https://opensource.org/licenses/gpl-license
// https://www.mozilla.org/en-US/MPL/2.0/



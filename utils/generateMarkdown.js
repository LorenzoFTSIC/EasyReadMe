// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  
  if( license !== "none" ){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else {
    // If there is no license, return an empty string
      return "";
    }
  }

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "For more information visit: https://choosealicense.com/licenses/mit/";
  } else if (license === "Apache") {
    return "For more information visit: https://choosealicense.com/licenses/apache-2.0/";
  } else if (license === "GPI") {
    return "For more information visit: https://gpilab.com/license/";
  } else {
    // If there is no license, return an empty string
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `  # ${data.title}
  ${renderLicenseBadge(data.license)}
   
    ## Table of Contents
    1. [Description](#description)
    2. [Installation](#installation)
    3. [License](#license)
    4. [Tests](#tests)
    5. [Contributing](#contributing)
    5. [Github](#github)
    6. [Email](#email)
    ## Description
    ${data.desc}
    ## Installation
    ${data.installation}
    ## License
    ${renderLicenseLink(data.license)}
    ## Contributing
    ${data.contribute}
    ## Tests
    ${data.tests}
    ## Github 
    ${data.ghubProfile}
    ## Email
    ${data.email}`;
  }

module.exports = generateMarkdown;

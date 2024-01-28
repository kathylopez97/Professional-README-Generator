// This functions creates to render license badge
function renderLicenseBadge(license) {
  if (!license) {
      return "";
  }

  switch (license) {
    case "MIT License":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "GNU GPL v3":
          return "[![License](https://img.shields.io/badge/license--GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      case "Mozilla Public License 2.0":
          return "[![License](https://img.shields.io/badge/license--MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      case "Attribution License (BY)":
          return "[![License](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
      default:
          return "";
  }
}

// This function to render the license link
function renderLicenseLink(license) {
  if (!license) {
      return "";
  }

  switch (license) {
      case "MIT License":
          return "(https://opensource.org/licenses/MIT)";
      case "GNU GPL v3":
          return "(https://www.gnu.org/licenses/gpl-3.0)";
      case "Mozilla Public License 2.0":
          return "(https://opensource.org/licenses/MPL-2.0)";p
      case "Attribution License (BY)":
          return "(https://opendatacommons.org/licenses/by/)";
          default:
    
          return "";
  }
}
// This function to render the license section of README
function renderLicenseSection(license) {
  if (!license) {
      return "";
  }

  return `## License:
  
  This project is licensed under the ${license} license.
  
  ${renderLicenseBadge(license)};
  ${renderLicenseLink(license)}`
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents:
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Contact Me](#contact-me)


  ## Installation 
  To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`
  ## Usage 
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Test
  \`\`\`
  ${data.test}
  \`\`\`
  ${renderLicenseSection(data.license)}

  ## Contact Me
  
  Contact me if you have any questions or additional feedback.
 * Email : ${data.email}. 
 * Github :[${data.github}](https://github.com/${data.github}).;`
}

module.exports = generateMarkdown;


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
            return "(https://opensource.org/licenses/MPL-2.0)";
        case "Attribution License (BY)":
            return "(https://opendatacommons.org/licenses/by/)";
            default:
      
            return "";
    }
  }

const dotenv = require("dotenv");

module.exports = async ({ options, resolveConfigurationProperty }) => {
  const envVariables = dotenv.config({ path: '.env' }).parsed;
  return envVariables;
}
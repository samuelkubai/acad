
// a function to notify when some envrironment variables are unset
const generalOptionalEnvVariables = [];

const optionalEnvVariables = {
  development: generalOptionalEnvVariables,
  staging: generalOptionalEnvVariables,
  test: generalOptionalEnvVariables,
  production: generalOptionalEnvVariables,
};

module.exports = (env) => {
  const undefinedVariables = Object.keys(env)
    .filter(variable => env[variable] === undefined
    && !optionalEnvVariables[process.env.NODE_ENV].includes(variable));

  if (!undefinedVariables.length) return env;

  /* istanbul ignore next */
  throw new Error(`
    \nThe following variables are required and missing in .env:
    \n${undefinedVariables.join('\n')}`);
};

const variables = {
  environmentVariable1: {
    dev: "development environment value",
    prod: "production environment value",
  },
};

export const getEnvVariables = (stage: string) => {
  const vars = {};
  Object.keys(variables).forEach((key: string) => {
    vars[key] = variables[key][stage];
  });
  return vars;
};

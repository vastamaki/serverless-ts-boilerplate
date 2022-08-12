const variables = {
  environmentVariable1: {
    dev: "development environment value",
    prod: "production environment value",
  },
};

export const getEnvVariables = (stage: string) => {
  const vars = {};
  
  Object.keys(variables).forEach((key) => {
    const type = typeof variables[key];

    const isTypeString = type === "string";

    const isObjectWithSingleKey =
      type === "object" && Object.keys(variables[key]).length === 1;

    if (isTypeString || isObjectWithSingleKey) {
      return (vars[key] = variables[key]);
    }

    vars[key] = variables[key][stage];
  });

  return vars;
};

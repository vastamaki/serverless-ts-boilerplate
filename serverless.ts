import type { AWS } from "@serverless/typescript";
import { getEnvVariables } from "./env-variables";
import functions from "@functions/index";

const { stage } = require("minimist")(process.argv.slice(2));

if (!stage) {
  throw new Error("Stage is missing!");
}

// Load environment variables from the file based on stage
const environmentVariables = getEnvVariables(stage);

const serverlessConfiguration: AWS = {
  service: "serverless-ts-boilerplate",
  frameworkVersion: "3.20.0",
  plugins: ["serverless-esbuild"],
  provider: {
    name: "aws",
    runtime: "nodejs16.x",
    region: "eu-west-1",
    deploymentMethod: "direct",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      ...environmentVariables,
    },
    lambdaHashingVersion: "20201221",
  },
  functions: functions,
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: true,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node16",
      define: { "require.resolve": undefined },
      platform: "node",
    },
  },
};

module.exports = serverlessConfiguration;

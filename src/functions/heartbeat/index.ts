import { handlerPath } from "@libs/handlerResolver";
import { AWS } from "@serverless/typescript";

const functions: AWS["functions"] = {
  heartbeat: {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
      {
        httpApi: "GET /",
      },
    ],
  },
};

export default functions;

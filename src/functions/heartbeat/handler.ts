import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

const heartbeat: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {
  return formatJSONResponse({
    message: `Hello, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middyfy(heartbeat);
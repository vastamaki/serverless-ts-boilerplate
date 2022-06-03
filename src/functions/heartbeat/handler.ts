import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

const handler: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {
  return formatResponse(200, {
    message: `Hello, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middyfy(handler);

import middy from "@middy/core";

const customMiddlewareBefore = async ({ event }) => {
  if (event.body) {
    event.rawBody = event.body;
    event.body = JSON.parse(event.body);
  }
  if (!event.queryStringParameters) {
    event.queryStringParameters = {};
  }
};

const parser = () => {
  return {
    before: customMiddlewareBefore,
  };
};

export const middyfy = (handler: any) => {
  return middy(handler).use(parser());
};

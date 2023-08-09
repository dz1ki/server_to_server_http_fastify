import * as http from "http";
import {
  buildErrorResponse,
  buildSuccessResponse,
  consumeCalcPercentSchema,
  resultCalcPercentSchema,
  validateByZod,
} from "./helper";
import { FastifyReply, FastifyRequest } from "fastify";
import { PostParams, RequestCalcPersent, SuccessReqest } from "./types";

const consumeParram = async (data: PostParams): Promise<SuccessReqest> => {
  return new Promise(async (resolve, reject) => {
    const parsedata = JSON.stringify(data);
    const options = {
      hostname: "localhost",
      port: 5000,
      path: "/calc/percent",
      method: "POST",
      headers: {
        "Content-Length": parsedata.length,
        "Content-type": "application/json",
      },
    };
    const req = http.request(options, (res) => {
      res.on("data", (resData) => {
        resolve(JSON.parse(resData));
      });
    });
    req.on("error", (error) => {
      reject(error);
      console.error(error);
    });

    req.write(parsedata);
    req.end();
  });
};

export const consumeCalcPercent = async (
  request: FastifyRequest<{ Body: RequestCalcPersent }>,
  reply: FastifyReply
) => {
  try {
    const data = request.body;
    validateByZod(data, consumeCalcPercentSchema);
    const result = await consumeParram(data);
    validateByZod(result, resultCalcPercentSchema);
    buildSuccessResponse(result, reply);
  } catch (error) {
    buildErrorResponse(error, reply);
  }
};

import { FastifyReply, FastifyRequest } from "fastify";
import { CalcRequestBody } from "./types";
import {
  buildErrorResponse,
  buildSuccessResponse,
  calcPresentSchema,
  validateByZod,
} from "./helper";

const calcPresent = (percent: number, numeric: number) => {
  const result = (numeric / 100) * percent;
  return { message: result };
};

export const percent = async (
  request: FastifyRequest<{ Body: CalcRequestBody }>,
  reply: FastifyReply
) => {
  try {
    const { percent, numeric } = request.body;
    validateByZod(request.body, calcPresentSchema);
    const result = calcPresent(percent, numeric);
    buildSuccessResponse(result, reply);
  } catch (error) {
    buildErrorResponse(error, reply);
  }
};

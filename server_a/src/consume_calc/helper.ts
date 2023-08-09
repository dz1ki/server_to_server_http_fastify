import { FastifyReply } from "fastify";
import { ErrorResponse, ParamsType, SuccessResponse } from "./types";
import { ZodTypeAny, z } from "zod";

export const consumeCalcPercentSchema = z.object({
  percent: z.number(),
  numeric: z.number(),
});

export const resultCalcPercentSchema = z.object({
  message: z.number(),
});

export const buildErrorResponse = (
  error: ErrorResponse,
  reply: FastifyReply
) => {
  reply
    .status(error.statusCode || 500)
    .send({ error: error.message || "Server error" });
};

export const buildSuccessResponse = (
  result: SuccessResponse,
  reply: FastifyReply
) => {
  reply.status(result.statusCode || 200).send({ message: result.message });
};

export const validateByZod = (data: ParamsType, schema: ZodTypeAny) => {
  schema.parse(data);
};

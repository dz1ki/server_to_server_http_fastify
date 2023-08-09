import { FastifyReply } from "fastify";
import { ErrorResponse, ParamsType, SuccessResponse } from "./types";
import { ZodTypeAny, z } from "zod";

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

export const calcPresentSchema = z.object({
  percent: z.number(),
  numeric: z.number(),
});

export const validateByZod = (data: ParamsType, schema: ZodTypeAny) => {
  schema.parse(data);
};

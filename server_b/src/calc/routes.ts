import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { percent } from "./controller";

const calc = (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) => {
  fastify.post("/percent", percent);
  done();
};

export default calc;

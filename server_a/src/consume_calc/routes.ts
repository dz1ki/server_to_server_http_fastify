import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { consumeCalcPercent } from "./controller";

const calc = (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) => {
  fastify.post("/percent", consumeCalcPercent);
  done();
};

export default calc;

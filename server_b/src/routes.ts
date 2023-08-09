import { FastifyInstance, FastifyPluginOptions } from "fastify";

const route = (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) => {
  fastify.register(require("./calc/routes"), { prefix: "/calc" });
  done();
};
export default route;

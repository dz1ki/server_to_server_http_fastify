import Fastify, { FastifyInstance } from "fastify";

const port: number = 5000;
const app: FastifyInstance = Fastify();

app.register(require("./routes"), { prefix: "/" });

const start = () => {
  try {
    app.listen({ port }, () => console.log(`Server started on port ` + port));
  } catch (e) {
    console.log(e);
  }
};

start();

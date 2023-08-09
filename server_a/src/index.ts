import * as Fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import * as path from "path";
import * as YAML from "yamljs";
import { FastifyInstance } from "fastify/types/instance";

const port: number = 3000;
const apiSpec = YAML.load(path.join(__dirname, "docs/openApi.yaml"));
const app: FastifyInstance = Fastify();
const swaggerOptions = {
  mode: "static" as const,
  specification: {
    document: apiSpec,
  },
  exposeRoute: true,
};
const swaggerUiOptions = {
  routePrefix: "/api",
  exposeRoute: true,
};

app.register(fastifySwagger, swaggerOptions);
app.register(fastifySwaggerUi, swaggerUiOptions);
app.register(require("./routes"), { prefix: "/" });

const start = async () => {
  try {
    app.listen({ port }, () => console.log(`Server started on port ` + port));
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

start();

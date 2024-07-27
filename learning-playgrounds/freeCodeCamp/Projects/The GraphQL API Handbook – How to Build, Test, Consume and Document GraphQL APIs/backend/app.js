import cors from "cors";
import express from "express";

import petRoutes from "./pets/routes/pets.routes.js";

import swaggerJSdoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs, resolvers } from "./pets/index.js";

const app = express();
const port = 3000;

// swagger definition
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pets API",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ["./pets/routes/*.js"],
};

/* Global middlewares */
app.use(cors());
app.use(express.json());
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJSdoc(swaggerSpec))
);

/* Routes */
app.use("/pets", petRoutes);

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

/* Server setup */
if (process.env.NODE_ENV !== "test") {
  const { url } = await startStandaloneServer(server, {
    listen: { port: port },
  });

  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
}

export default app;

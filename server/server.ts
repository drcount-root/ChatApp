import { config } from "dotenv";
config();

import fastify from "fastify";

const app = fastify();

console.log("Hi from server...");

app.listen({ port: parseInt(process.env.PORT!) });

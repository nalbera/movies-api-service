import express from "express";
import morgan from "morgan";
import cors from "cors";

import router from "./routes";
import { handleErrors, notFound } from "./errors";

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

server.use(router);

server.use(handleErrors);
server.use(notFound);

export default server;
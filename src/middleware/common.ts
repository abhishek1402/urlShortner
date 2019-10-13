import parser from "body-parser";
import cors from "cors";
import { express } from "express";

export const handleCors = (app: express) =>
  app.use(cors());

export const handleBodyRequestParsing = (app: express) => {
  app.use(parser.urlencoded({ extended: false }));
  app.use(parser.json());
};

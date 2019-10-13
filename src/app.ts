import express from "express";
import { database } from "./dao/mysql";
import middleware from "./middleware";
import {handleServerErrors, pageNotFound} from "./middleware/errHandler";
import AppRoutes from "./router";
import { applyMiddleware } from "./util";

class App {
  public express;
  public router;
  private database;
  constructor() {
    this.express = express();
    this.router =  express.Router();
    this.database = database;
    this.mountMiddleware();
    this.mountRoutes();
  }

  private mountMiddleware(): void {
    applyMiddleware(middleware, this.express );
  }

  private mountRoutes(): void {
    this.express.use("/api", AppRoutes);
    this.express.use(handleServerErrors);
    this.express.use(pageNotFound);
  }
}

export default new App().express;

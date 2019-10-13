import { Router } from "express";
import * as express from "express";

export abstract class RouterClass {
    public router: Router;
    constructor() {
        this.router =  express.Router();
        this.initializeRoute();
    }
    public abstract initializeRoute(): void;
}

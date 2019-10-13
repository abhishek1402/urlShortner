
import { database, IDbInterface } from "../dao/mysql";

export abstract class Controller {
    public db: IDbInterface;

    constructor() {
        this.db = database;
    }
}

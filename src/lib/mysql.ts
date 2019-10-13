// tslint:disable:no-console
import * as mysql from "mysql2";
import { connectionConfig } from "../config/db";

class MysqlConnection {
    public connection: any;
    constructor() {
        this.initializeConnection();
    }
    private async initializeConnection() {
        await this.createConnection();
        await this.connect();
    }
    private async createConnection() {
        try {
            this.connection = mysql.createConnection(connectionConfig);
        } catch (err) {
            throw Error(err);
        }
    }
    private connect() {
        this.connection.connect((err) => {
            if (err) { console.log(err); } else {
            console.log(`Connected! to Database successfully => Host ${connectionConfig.host}`);
            }
        });
        this.connection.on("error", (err) => {
            console.log(connectionConfig)
            console.log(`Cannot establish a connection with the database (${err.code})`);
        });
    }
}

export const connection = new MysqlConnection().connection;

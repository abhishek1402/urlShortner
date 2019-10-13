import {connection} from "../lib/mysql";
class Database {
  private connection;
  constructor() {
    this.connection = connection;
  }

  public async query(sql: string, args?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) { return reject(err); }
        const temp = JSON.stringify(rows);
        resolve(JSON.parse(temp));
      });
    });
  }
}
export const database: IDbInterface = new Database();

export interface IDbInterface {
  query: (sql: string, args?: any) => Promise<any>;
}

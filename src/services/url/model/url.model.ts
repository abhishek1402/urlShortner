import { UrlTable,Fields } from "../url.constants";

class UrlModel {
    public saveUrl(body: UrlInterface) {
        const values = Fields.map((tableVariable) => `'${body[tableVariable]}'`);
        return `INSERT INTO ${UrlTable} (${Fields.join()}) VALUES (${values.join()})`;
    }
    public getUrl(shortCode: string) {
        return `SELECT url,redirectCount FROM ${UrlTable} WHERE shortcode='${shortCode}'`;
    }
    public increaseCount(count:number,shortCode:string,lastSeenDate:Date){
        return `UPDATE ${UrlTable} SET redirectCount = ${count},lastSeenDate='${lastSeenDate}' WHERE shortcode='${shortCode}'`;
    }
    public getStat(shortCode:string){
        return `SELECT ${Fields.join()} FROM ${UrlTable} WHERE shortcode='${shortCode}'`;
    }
}
export const urlModel = new UrlModel();
export interface UrlInterface {
    "url": string,
    "shortcode": string,
    "startdate":Date
    "redirectCount":Number,
    "lastSeenDate":string
}

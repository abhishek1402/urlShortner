
import { Controller } from "../../../util/controller.class";
import { HTTP401Error, HTTP404Error, HTTP409Error } from "../../../util/http400Error";
import { UrlInterface, urlModel } from "../model/url.model";
import RandExp from "randexp";
class UrlControllerClass extends Controller {
    constructor() {
        super();
    }
    public async shorten(body: UrlInterface) {
        try {
            if(!body.url){
                throw new HTTP401Error("Url should be present");
            }
            else if(!body.shortcode){
                const randexp = new RandExp(/^[0-9a-zA-Z_]{6}$/);
                body.shortcode = randexp.gen();
              
            }
            body.redirectCount = 0
            body.startdate = new Date()
            await this.db.query(urlModel.saveUrl(body));
            return {"shortCode":body.shortcode};
        } catch (e) {
            if (e.errno === 1062 ) {
                throw new HTTP409Error("Url Already Exist With A ShortCode");
            }
            throw e;
        }
    }
    public async getUrl(shortCode) {          
        let url = await this.db.query(urlModel.getUrl(shortCode));
        if(url.length){ 
            let redirectCount = url[0].redirectCount
            let lastSeenDate = new Date()
            this.db.query(urlModel.increaseCount(redirectCount+1,shortCode,lastSeenDate));
            return {"url":url};
        }
        else throw new HTTP401Error("Short Code not present in the system");
    }

    public async getStats(shortCode) {          
        let url = await this.db.query(urlModel.getStat(shortCode));
        if(url.length){ 
            return {"url":url};
        }
        else throw new HTTP401Error("Short Code not present in the system");
    }
}

export const UrlClass = new UrlControllerClass();

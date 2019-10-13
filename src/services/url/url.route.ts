import { NextFunction, Request, Response } from "express";
import { RouterClass } from "../../router/router.class";
import HttpSuccess from "../../util/httpSuccess";
import { UrlClass } from "./controller/url.controller";
import { UrlShortenedSuccesfully } from "./url.constants";
import { HTTP401Error } from "../../util/http400Error";

class UrlRoutes extends RouterClass {
    constructor() {
       super();
    }
    public initializeRoute(): void {
        this.router.post("/shorten",async (req: Request, res: Response, next: NextFunction) => {
            try {
                const urlShortenData = await UrlClass.shorten(req.body);
                HttpSuccess.sendResponse(res, UrlShortenedSuccesfully,
                    urlShortenData);
            } catch (error) {
                next(error);
            }
        })

        this.router.get("/:shortcode",
        async (req: Request, res: Response, next: NextFunction) => {
           try{
               let shortCode = req.params.shortcode;
                if(!shortCode){
                    throw new HTTP401Error("Short Code should be present");
                }
               let url = await UrlClass.getUrl(shortCode);
               HttpSuccess.sendResponse(res,"",url);
           }
           catch (error) {
            next(error);
            }
        });

        this.router.get("/:shortcode/stats",
        async (req: Request, res: Response, next: NextFunction) => {
           try{
               let shortCode = req.params.shortcode;
               console.log(shortCode)
                if(!shortCode){
                    throw new HTTP401Error("Short Code should be present");
                }
               let url = await UrlClass.getStats(shortCode);
               HttpSuccess.sendResponse(res,"",url);
           }
           catch (error) {
            next(error);
            }
        });
    }
}

export default new UrlRoutes().router;

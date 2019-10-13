import { Response } from "express";
export default class HttpSuccess {
    public static sendResponse(res: Response, message?: string,  data?: any) {
        res.status(200).send({
            data,
            message: message ? message : "success",
        });
    }
}

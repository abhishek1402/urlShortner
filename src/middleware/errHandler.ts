import { NextFunction, Request, Response, Router } from "express";
import { HTTPError } from "../util/httpError";

export const handleServerErrors = (err, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof HTTPError) {
        res.status(err.statusCode ? err.statusCode : 500).json({
            error: err,
            message: err.message,
            success: false,
          });
    } else if (err.stack) {
        res.status(500).json({
            error: err,
            message: err.message,
            success: false,
          });
    } else {
        next();
    }
};

export const pageNotFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({message: "api not found", success: false});
};

export default handleServerErrors;

import { NextFunction, Response, Request } from "express";
import { CustomError } from "../utils/generateErrorsUtils";

const handleErrors = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.httpCode).json({
        status: "error",
        message: err.message
    });
}

export default handleErrors;
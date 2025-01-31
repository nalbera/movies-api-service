export class CustomError extends Error {

    httpCode: number;

    constructor(message: string, httpCode: number) {
        super(message);
        this.httpCode = httpCode;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

const generateErrorsUtils = (message: string, httpCode: number) => {
    const error = new CustomError(message, httpCode);
    return error;
}

export default generateErrorsUtils;
import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationError } from 'express-validator';

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    const extractedErrors: { [key: string]: any }[] = [];

    errors.array().forEach((err) => {
        if ('param' in err) {
            extractedErrors.push({ [err.param as string]: err.msg });
        }
    });

    return res.status(422).json({
        errors: extractedErrors
    });
};

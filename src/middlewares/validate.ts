import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'utils';
import { ZodSchema } from 'zod';

const validate =
  (schema: ZodSchema) => (req: Request, _res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (e) {
      throw new HttpError(400, 'Bad Request', e);
    }
  };

export default validate;

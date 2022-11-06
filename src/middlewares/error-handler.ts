import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'utils';

const errorHandler = (
  e: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (e instanceof HttpError) {
    return res.status(e.statusCode).send(e.serializeError());
  }

  res.status(500).send({
    statusCode: 500,
    message: 'Server Error',
    devMessage: process.env.NODE_ENV !== 'PRD' ? e : null,
  });
};

export default errorHandler;

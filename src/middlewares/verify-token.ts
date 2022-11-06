import auth from 'config/firebase';
import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'utils';

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;

  if (!header) {
    throw new HttpError(401, 'Unauthorized', 'missing auth header');
  }

  try {
    const token = header.replace('Bearer ', '');
    const { uid } = await auth.verifyIdToken(token);
    req.userId = uid;
    next();
  } catch (e) {
    throw new HttpError(401, 'Unauthorized', e);
  }
};

export default verifyToken;

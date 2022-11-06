import { Request, Response } from 'express';
import * as service from 'services/users';

export const getUser = async (req: Request, res: Response) => {
  service.getUser();
  res.send();
};

export const postUser = async (req: Request, res: Response) => {
  service.postUser();
  res.send();
};

import * as controller from 'controllers/users';
import { Router } from 'express';
import { validate } from 'middlewares';
import { createUser } from 'schemas';

const router = Router();

router.get('/', controller.getUser);
router.post('/', validate(createUser), controller.postUser);

export default router;

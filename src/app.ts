import 'express-async-errors';

import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { errorHandler, notFound, verifyToken } from 'middlewares';
import morgan from 'morgan';
import router from 'routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(morgan('tiny'));
app.get('/api/health', (_, res) => {
  res.send('OK');
});
app.use('/api', verifyToken, router);
app.all('*', notFound);
app.use(errorHandler);

export default app;

import express, { Application, Request, Response } from 'express';
import { userRouter } from './infrastructure/routers/user-router';

export const app: Application = express();

app.use(express.json());

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});

app.use('/api/users', userRouter());

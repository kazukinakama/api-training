import express from 'express';
import { UserRepositoryImpl } from '../../interface/repositories/user-repository-impl';
import { UserController } from '../../interface/controllers/user-controller';

type UserRequest = {
  name: string,
};

export const userRouter = (): express.Router => {
  const router = express.Router();
  const userRepository: UserRepositoryImpl = new UserRepositoryImpl();
  const userController: UserController = new UserController(userRepository);

  router.get('/', async (req, res, next) => {
    try {
      const result = await userController.findAll();
      res.json(result);
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async (req, res, next) => {
    try {
      const requestBody: UserRequest = req.body;
      const result = await userController.create(requestBody);
      res.json(result);
    } catch (err) {
      next(err);
    }
  });

  router.get('/:id', async (req, res, next) => {
    try {
      const id: number = +req.params.id;
      const result = await userController.findOne(id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  });

  router.put('/:id', async (req, res, next) => {
    try {
      const id: number = +req.params.id;
      const requestBody: UserRequest = req.body;
      const result = await userController.update(id, requestBody);
      res.json(result);
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:id', async (req, res, next) => {
    try {
      const id: number = +req.params.id;
      const result = await userController.delete(id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  });

  return router;
};

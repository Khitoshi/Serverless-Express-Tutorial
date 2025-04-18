import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { validate } from '../middleware/validate';
import { UserCreate, User } from '../schemas/user';

export const userRouter = Router();

/* POST /users */
userRouter.post(
  '/users',
  validate(UserCreate),            // Zod 検証
  async (req, res) => {
    const created = await prisma.user.create({ data: req.body });
    res.status(201).json(User.parse(created));  // 返却もスキーマで整形
  },
);

/* GET /users */
userRouter.get('/users', async (_req, res) => {
  const users = await prisma.user.findMany();
  res.json(users.map((u) => User.parse(u)));
});

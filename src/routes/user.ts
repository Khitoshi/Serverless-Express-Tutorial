import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { validate } from '../middleware/validate';
import { UserCreate, User } from '../schemas/user';

export const userRouter = Router();


/**
 * @openapi
 * /users:
 *   post:
 *     summary: ユーザー作成
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserCreate'
 *     responses:
 *       201:
 *         description: 作成成功
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
userRouter.post(
  '/users',
  validate(UserCreate),            // Zod 検証
  async (req, res) => {
    const created = await prisma.user.create({ data: req.body });
    res.status(201).json(User.parse(created));  // 返却もスキーマで整形
  },
);

/**
 * @openapi
 * /users:
 *   get:
 *     summary: 一覧取得
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
userRouter.get('/users', async (_req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});


/**
 * @openapi
 * /user:
 *   get:
 *     summary: user取得
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ユーザーID
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
userRouter.get('/user', async (req, res) => {
  const users = await prisma.user.findMany({
    where: {
      id: req.body.id,
    },
  });
  res.json(users);
});
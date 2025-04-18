import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs';
import { userRouter } from './routes/user';

export const app = express();
app.use(express.json());
app.use(userRouter);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/openapi.json', (_req, res) => res.json(swaggerSpec));

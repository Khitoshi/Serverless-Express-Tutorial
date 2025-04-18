import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger';

export const app: Application = express();

/* --- API ルートここ --- */
app.get('/', (_req, res) => res.json({ ok: true }));

/* --- Swagger UI & JSON --- */
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/openapi.json', (_req, res) => res.json(swaggerSpec));

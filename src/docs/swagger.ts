import {extendZodWithOpenApi, OpenAPIRegistry, OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import { UserCreate, User } from '../schemas/user';
import { z } from 'zod';

extendZodWithOpenApi(z); 

export const registry = new OpenAPIRegistry();


/* --- スキーマ登録 --- */
registry.register('UserCreate', UserCreate);
registry.register('User',       User);

/* --- パス登録 --- */
registry.registerPath({
  method: 'post',
  path: '/users',
  tags: ['User'],
  request: {
    body: { content: { 'application/json': { schema: UserCreate } } },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: User } } },
  },
});

/* --- OpenAPI ドキュメント生成 (変更点) --- */
const generator      = new OpenApiGeneratorV3(registry.definitions);
export const swaggerSpec = generator.generateDocument({
  openapi: '3.0.3',
  info: { title: 'Serverless‑Express API', version: '1.0.0' },
});

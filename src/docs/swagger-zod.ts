import { z } from 'zod';
import {
  extendZodWithOpenApi,
  OpenAPIRegistry,
  OpenApiGeneratorV3,
} from '@asteasolutions/zod-to-openapi';
import { UserCreate, User } from '../schemas/user';

extendZodWithOpenApi(z);

const registry = new OpenAPIRegistry();
registry.register('UserCreate', UserCreate.openapi('UserCreate'));
registry.register('User',       User.openapi('User'));

const zodGen = new OpenApiGeneratorV3(registry.definitions);
export const zodSpec = zodGen.generateDocument({
  openapi: '3.0.3',
  info: { title: 'API', version: '1.0.0' },
});

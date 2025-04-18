import { app } from './app';
import { configure } from '@codegenie/serverless-express';

export const handler = configure({ app });

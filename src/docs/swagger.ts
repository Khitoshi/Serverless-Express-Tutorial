import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDef = {
  openapi: '3.0.3',
  info: {
    title: 'Serverless‑Express API',
    version: '1.0.0',
    description: 'Example API documented with OpenAPI 3',
  },
  servers: [
    { url: 'http://localhost:3000', description: 'Local' },
    // 本番は API Gateway の URL を追加
  ],
};

export const swaggerSpec = swaggerJSDoc({
  definition: swaggerDef,
  apis: ['src/routes/**/*.ts', 'src/app.ts', 'src/docs/**/*.yaml'], // ← 好きな場所
});

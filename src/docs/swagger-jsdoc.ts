import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDef = {
  openapi: '3.0.3',
  info: { title: 'API', version: '1.0.0' },
  servers: [{ url: 'http://localhost:3000' }],
};

const apis =
  process.env.NODE_ENV === 'development'
    ? ['src/routes/**/*.ts']
    : ['dist/routes/**/*.js']; 

export const jsdocSpec = swaggerJSDoc({ definition: swaggerDef, apis });

import { zodSpec }  from './swagger-zod';
import { jsdocSpec } from './swagger-jsdoc';

export const swaggerSpec = {
  ...(jsdocSpec as any),
  components: {
    ...((jsdocSpec as any).components ?? {}),
    schemas: {
      ...((jsdocSpec as any).components?.schemas ?? {}),
      ...((zodSpec as any).components?.schemas ?? {}),
    },
  },
};
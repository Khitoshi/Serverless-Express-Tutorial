import { ZodSchema } from 'zod';
import { Request, Response, NextFunction } from 'express';

/** req.body を Zod で検証し、成功時は型付きデータに置換 */
export const validate =
  <T extends ZodSchema>(schema: T) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.safeParseAsync(req.body);
    if (!result.success) {
      return res.status(400).json({ error: result.error.format() });
    }
    req.body = result.data;
    return next();
  };

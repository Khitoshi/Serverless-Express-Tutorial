import { z } from 'zod';

export const UserBase = z.object({
  id:    z.string().uuid(),
  name:  z.string().min(1).max(50),
  email: z.string().email(),
});

export const UserCreate = UserBase.omit({ id: true });
export const User       = UserBase;

export type UserCreateDto = z.infer<typeof UserCreate>;
export type UserDto       = z.infer<typeof User>;

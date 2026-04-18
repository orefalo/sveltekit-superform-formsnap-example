import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  age: z.number({ invalid_type_error: 'Age must be a number' }).int().min(18, 'Must be 18 or older'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string()
});

export type UserSchema = typeof userSchema;

import * as v from 'valibot';

export const userSchema = v.object({
  name: v.pipe(v.string(), v.minLength(2, 'Name must be at least 2 characters')),
  email: v.pipe(v.string(), v.email('Please enter a valid email')),
  age: v.pipe(v.number('Age must be a number'), v.integer(), v.minValue(18, 'Must be 18 or older')),
  password: v.pipe(v.string(), v.minLength(8, 'Password must be at least 8 characters')),
  confirmPassword: v.string()
});

export type UserSchema = typeof userSchema;

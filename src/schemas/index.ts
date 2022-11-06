import { z } from 'zod';

export const createUser = z
  .object({
    name: z.string(),
    age: z.number(),
  })
  .strict();

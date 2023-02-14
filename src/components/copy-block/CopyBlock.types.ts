import { z } from 'zod';

export const PropsTypes = z.object({
  copyHeader: z.string(),
  copyTitle: z.string(),
  copyBody: z.string(),
});

export type PropsTypes = z.infer<typeof PropsTypes>;

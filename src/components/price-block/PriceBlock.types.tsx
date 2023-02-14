import { z } from 'zod';

export const Currencies = z.enum(['EUR', 'USD', 'GBP']);
export type Currencies = z.infer<typeof Currencies>;

export const PropTypes = z.object({
  basePrice: z.number(),
  promotion: z.number().optional(),
  currency: Currencies.default('USD').optional(),
});

export type PropTypes = z.infer<typeof PropTypes>;

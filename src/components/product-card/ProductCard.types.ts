import { z } from 'zod';
import { PropsTypes as CopyBlockProps } from '@src/components/copy-block/CopyBlock.types';
import { PropTypes as PriceBlockProps } from '@src/components/price-block/PriceBlock.types';

export const PropsTypes = z.object({
  image: z.string(),
  copy: CopyBlockProps,
  price: PriceBlockProps,
});

export type PropsTypes = z.infer<typeof PropsTypes>;

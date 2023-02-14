import { useMemo } from 'react';
import type { PropTypes } from './PriceBlock.types';

const PriceBlock = ({ promotion, basePrice, currency }: PropTypes) => {
  const priceFormat = useMemo(
    () =>
      new Intl.NumberFormat('en', {
        style: 'currency',
        currency: currency ?? 'USD',
      }),
    [currency]
  );

  return (
    <div className="text-serif flex items-center justify-start gap-5 text-dark-grayish-blue desktop:gap-4">
      {promotion && (
        <p className="text-big text-dark-cyan">
          {priceFormat.format(promotion)}
        </p>
      )}
      <p className="text-base line-through">{priceFormat.format(basePrice)}</p>
    </div>
  );
};

export default PriceBlock;

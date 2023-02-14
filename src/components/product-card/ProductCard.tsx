import PriceBlock from '@src/components/price-block';
import ProductImage from '@src/components/product-image';
import CopyBlock from '@src/components/copy-block';
import CartButton from '@src/components/cart-button';
import type { PropsTypes } from './ProductCard.types';

const ProductCard = ({ copy, price, image }: PropsTypes) => {
  return (
    <div className="text-sans mx-4 my-7 flex h-full max-h-mobile max-w-mobile flex-col rounded-lg bg-white text-base desktop:max-h-desktop desktop:max-w-desktop desktop:flex-row">
      <div className="h-2/6  w-full desktop:h-full desktop:w-1/2 desktop:flex-grow">
        <ProductImage src={image} />
      </div>
      <div className="m-6 flex flex-grow flex-col desktop:w-1/2">
        <div className='flex flex-col mobile:mb-5 desktop:mb-6justify-between'>
          <CopyBlock {...copy} />
          <PriceBlock {...price} />
        </div>
        <CartButton className='' />
      </div>
    </div>
  );
};

export default ProductCard;

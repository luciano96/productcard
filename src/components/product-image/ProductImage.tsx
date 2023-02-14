import Image from 'next/image';
import type { PropTypes } from './ProductImage.types';

const ProductImage = ({ src }: PropTypes) => {
  // make sure that min-width always match the desktop width on tailwind.config.ts
  return (
    <div className="h-full w-full relative">
      <picture>
        <source
          media={`(min-width:1440px`}
          srcSet={`/${src}-lg.jpg`}
        />
        <Image
          className="rounded-t-lg desktop:rounded-tl-lg desktop:rounded-tr-none desktop:rounded-bl-lg"
          src={`/${src}-sm.jpg`}
          alt="Perfurme"
          fill
        />
      </picture>
    </div>
  );
};

export default ProductImage;

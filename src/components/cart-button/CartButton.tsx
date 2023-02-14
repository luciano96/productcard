import CartSVG from './CartSVG';
import classnames from 'classnames'

const CartButton = ({ className }: { className: string }) => {
  return (
    <button className={classnames("bg-dark-cyan hover:cursor-pointer hover:bg-darker-cyan text-white rounded-lg flex justify-center items-center h-12 min-h-12 desktop:h-10 desktop:min-h-10", className)}>
      <CartSVG />
      <p className='ml-3'>Add to Cart</p>
    </button>
  );
};

export default CartButton;

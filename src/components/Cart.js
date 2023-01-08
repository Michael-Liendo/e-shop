import { useState } from 'react';
import BagIcon from './Icons/ShoppingBagIcon';
import ProductCardBag from './ProductCardBag';
import { useShop } from '../context/ShopContext';
import cn from 'classnames';

export default function Cart() {
  const [bagOpen, setBagOpen] = useState(false);
  const { cart, cartAnimated } = useShop();

  const cartTotal = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  return (
    <div>
      <div
        className={cn(
          'transition duration-200 cursor-pointer hover:scale-105',
          {
            'scale-110 duration-75': cartAnimated,
          }
        )}
        onClick={() => {
          setBagOpen(!bagOpen);
        }}
      >
        <BagIcon />
      </div>

      {bagOpen && (
        <div className="fixed right-2 bg-slate-50 p-3 shadow-lg w-80">
          <div className="overflow-y-scroll w-80 h-80">
            {cart.map((product, index) => {
              return (
                <ProductCardBag
                  key={product.id}
                  index={index}
                  product={product}
                />
              );
            })}
          </div>
          <div className="flex justify-between items-center">
            <div className="mt-3 flex flex-col items-center">
              <span className="text-xs">
                {cart.length} item{cart.length === 1 ? '' : 's'}
              </span>
              <span className="font-medium mt-1">
                ${cartTotal < 1 ? '0.00' : cartTotal}
              </span>
            </div>
            <button
              type="button"
              className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              Check out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

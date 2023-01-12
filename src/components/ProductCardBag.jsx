import Image from 'next/image';
import TrashIcon from './Icons/TrashIcon';
import { useCart } from '../store/ShopStore';

export default function ProductCardBag({ product, index }) {
  const { removeProduct, addProduct, decrementQuantity } = useCart();

  return (
    <div className="flex my-2.5">
      <div>
        <Image
          className="rounded-sm w-20 h-20 object-cover"
          src={product.images[0]}
          alt={product.title}
          width="1000"
          height="1000"
        />
      </div>

      <div className="flex justify-between w-full ml-3">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">{product.title}</span>
          <span className="text-sm">${product.price * product.quantity}</span>
          <div className="flex justify-between w-11 bg-gray-100 text-gray-800 text-xs font-medium rounded-full dark:bg-gray-700 dark:text-gray-300">
            <button
              onClick={() => decrementQuantity(product)}
              className="mr-2.5 px-1 bg-[#5f5757] font-black rounded-l-full w-5 text-white"
            >
              -
            </button>
            {product.quantity}
            <button
              onClick={() => addProduct(product)}
              className="ml-2.5 px-1 bg-[#2557D6] font-black rounded-r-full w-5 text-white"
            >
              +
            </button>
          </div>
        </div>
        <i
          onClick={() => removeProduct(index)}
          className="py-1.5 px-3 hover:cursor-pointer"
        >
          <TrashIcon />
        </i>
      </div>
    </div>
  );
}

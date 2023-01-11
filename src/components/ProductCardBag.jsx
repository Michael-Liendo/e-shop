import Image from 'next/image';
import TrashIcon from './Icons/TrashIcon';
import { useCart } from '../store/ShopStore';

export default function ProductCardBag({ product, index }) {
  const { removeProduct } = useCart();

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
          <span className="text-sm">${product.price}</span>
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

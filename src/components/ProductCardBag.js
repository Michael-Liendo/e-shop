import Image from 'next/image';
import { useShop } from '../context/ShopContext';
import TrashIcon from './Icons/TrashIcon';

export default function ProductCardBag({ product, index }) {
  const { setCart } = useShop();

  function deleteItemBag() {
    setCart((prev) => {
      const newCart = [...prev];
      newCart.splice(index, 1);
      return newCart;
    });
  }

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
        <i onClick={deleteItemBag} className="p-5 hover:cursor-pointer">
          <TrashIcon />
        </i>
      </div>
    </div>
  );
}

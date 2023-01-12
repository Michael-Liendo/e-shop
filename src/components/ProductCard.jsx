import Image from 'next/image';
import { useCart } from '../store/ShopStore';

export default function ProductCard({ product }) {
  const { addProduct, setCartAnimated } = useCart();

  function CartAnimation() {
    setCartAnimated(true);
    setTimeout(() => setCartAnimated(false), 200);
  }

  return (
    <a key={product.id}>
      <div className="pb-3 transition duration-300 rounded-lg w-64  hover:shadow-xl">
        <Image
          className="rounded-lg w-full h-56 object-cover"
          src={product.images[0]}
          alt={product.title}
          width="1000"
          height="1000"
        />
        <div className="mx-2">
          <h4 className="mt-4 font-medium text-lg text-[#444e5e]">
            {product.title}
          </h4>
          <small className="block text-sm font-light text-gray-400">
            {product.category.name}
          </small>
          <div className="flex justify-between ">
            <span className="text-xl text-gray-600 font-medium mt-1">
              ${product.price}
            </span>
            <button
              onClick={() => {
                addProduct({ ...product, quantity: 1 });
                CartAnimation();
              }}
              type="button"
              className="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </a>
  );
}

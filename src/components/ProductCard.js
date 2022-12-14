import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <a key={product.id}>
      <div className="pb-3 transition duration-300 rounded-lg w-64  hover:shadow-xl">
        <Image
          className="rounded-lg w-full h-56 object-cover"
          src={product.images[0]}
          alt="Hola"
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
          <span className="text-xl text-gray-600 font-medium mt-10">
            ${product.price}
          </span>
        </div>
      </div>
    </a>
  );
}

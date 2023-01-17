import Image from 'next/image';

export default function ProductCheckout({ product }) {
  return (
    <div class="flex flex-col rounded-lg bg-white sm:flex-row">
      <Image
        class="m-2 h-24 w-28 rounded-md border object-cover object-center"
        src={product.images[0]}
        width={122}
        height={96}
        alt={product.title}
      />
      <div class="flex w-full flex-col px-4 py-4">
        <span class="font-semibold">{product.title}</span>
        <p class="text-lg font-bold">${product.price}</p>
        <span>Quantity: {product.quantity}</span>
      </div>
    </div>
  );
}

import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { useCart } from '../../store/ShopStore';

export default function Product({ product }) {
  const { addProduct, setCartAnimated } = useCart();

  function CartAnimation() {
    setCartAnimated(true);
    setTimeout(() => setCartAnimated(false), 200);
  }

  return (
    <>
      <Navbar />
      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt={product.title}
              width={500}
              height={500}
              class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={product.images[0]}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                {product.category.name}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>

              <p class="leading-relaxed">{product.description}</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div class="flex ml-6 items-center">
                  <div class="relative"></div>
                </div>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>

                <button
                  onClick={() => {
                    addProduct({ ...product, quantity: 1 });
                    CartAnimation();
                  }}
                  type="button"
                  className="ml-auto py-2 px-6 font-medium text-center text-white bg-blue-700 rounded hover:bg-blue-800"
                >
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const request = await fetch(
    `https://api.escuelajs.co/api/v1/products/${params.id}`
  );
  const product = await request.json();

  return {
    props: { product },
  };
}

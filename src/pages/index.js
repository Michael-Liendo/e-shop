import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

export default function Home({ products, categories }) {
  const [showCategories, setShowCategories] = useState('all');

  if (showCategories !== 'all') {
    products = products.filter(
      (product) => product.category.name.toLowerCase() === showCategories
    );
  }

  return (
    <div>
      <Navbar />
      <div className="flex pt-20">
        <aside className="overflow-y-scroll fixed h-[89vh] w-[25%]">
          <p className="ml-10 text-xl font-semibold">Categories</p>
          <h2
            onClick={() => setShowCategories('all')}
            className="ml-12 cursor-pointer text-lg"
          >
            All
          </h2>
          {categories
            ? categories.map((category) => (
                <h2
                  onClick={() => setShowCategories(category.name.toLowerCase())}
                  className="ml-12 cursor-pointer text-lg"
                  key={category.id}
                >
                  {category.name}
                </h2>
              ))
            : null}
        </aside>
        <main className="mt-5 ml-[32%] grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products
            ? products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
            : null}
        </main>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const categoriesRequest = await fetch(
    'https://api.escuelajs.co/api/v1/categories'
  );

  const categories = await categoriesRequest.json();
  const productsRequest = await fetch(
    'https://api.escuelajs.co/api/v1/products'
  );
  const products = await productsRequest.json();
  return {
    props: { products, categories },
  };
}

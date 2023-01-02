import { useState } from 'react';
import cn from 'classnames';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';

export default function Home({ products, categories }) {
  const { searchForm } = useShop();

  const [showCategories, setShowCategories] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  if (showCategories !== 'all') {
    products = products.filter(
      (product) => product.category.name.toLowerCase() === showCategories
    );
  }
  if (sortBy !== 'recent') {
    products = products.sort((a, b) => {
      if (sortBy === 'lowest-price') {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        else return 0;
      }
      if (sortBy === 'highest-price') {
        if (a.price > b.price) return -1;
        if (a.price < b.price) return 1;
        else return 0;
      }
    });
  }

  if (searchForm !== '') {
    products = products.filter((product) =>
      product.title.toLowerCase().includes(searchForm)
    );
  }

  return (
    <div>
      <Navbar />
      <div className="flex pt-20">
        <aside className="hidden sm:block overflow-y-scroll fixed h-[89vh] w-[25%]">
          <h3 className="ml-10 text-xl font-semibold">Categories</h3>
          <ul>
            <li
              onClick={() => setShowCategories('all')}
              className={cn('ml-12 cursor-pointer text-lg', {
                'font-semibold': showCategories === 'all',
              })}
            >
              All
            </li>
            {categories
              ? categories.map((category) => (
                  <li
                    onClick={() =>
                      setShowCategories(category.name.toLowerCase())
                    }
                    className={cn('ml-12 cursor-pointer text-lg', {
                      'font-semibold':
                        showCategories === category.name.toLowerCase(),
                    })}
                    key={category.id}
                  >
                    {category.name}
                  </li>
                ))
              : null}
          </ul>
          <h3 className="ml-10 mt-6 text-xl font-semibold">Sort By</h3>
          <ul>
            <li
              className={cn('ml-12 cursor-pointer text-lg', {
                'font-semibold': sortBy === 'recent',
              })}
              onClick={() => setSortBy('recent')}
            >
              Recent
            </li>
            <li
              className={cn('ml-12 cursor-pointer text-lg', {
                'font-semibold': sortBy === 'lowest-price',
              })}
              onClick={() => setSortBy('lowest-price')}
            >
              Lowest price
            </li>
            <li
              className={cn('ml-12 cursor-pointer text-lg', {
                'font-semibold': sortBy === 'highest-price',
              })}
              onClick={() => setSortBy('highest-price')}
            >
              Highest price
            </li>
          </ul>
        </aside>
        <main className="mt-5 mx-auto sm:ml-[32%] grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

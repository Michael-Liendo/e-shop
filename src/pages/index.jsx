import { useState } from 'react';
import cn from 'classnames';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { useShopStore } from '../store/ShopStore';
import Head from 'next/head';

export default function Home({ products, categories }) {
  const { searchForm } = useShopStore();

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
    <>
      <Head>
        <title>E-Commerce</title>
      </Head>
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
              {categories.length ? (
                categories.map((category) => (
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
              ) : (
                <span>No hay más categorías</span>
              )}
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
          <main className="mt-5 mx-auto sm:ml-[32%] grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-10">
            {products.length ? (
              products.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))
            ) : (
              <h1>No hay products</h1>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  let categories = [];
  let products = [];

  try {
    const categoriesRequest = await fetch(
      'https://api.escuelajs.co/api/v1/categories'
    );
    categories = await categoriesRequest.json();
  } catch (error) {
    console.error(error);
    categories = [];
  }

  try {
    const productsRequest = await fetch(
      'https://api.escuelajs.co/api/v1/products'
    );
    products = await productsRequest.json();
  } catch (error) {
    console.error(error);
    products = [];
  }

  return {
    props: { products: products, categories: categories },
  };
}

import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

export default function Home({ products }) {
  return (
    <div>
      <Navbar />
      <div className="ml-80 grid grid-cols-3 gap-4">
        {products
          ? products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          : null}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const request = await fetch('https://api.escuelajs.co/api/v1/products');
  const products = await request.json();
  return {
    props: { products },
  };
}

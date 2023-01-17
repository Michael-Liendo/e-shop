import SearchForm from './SearchForm';
import Cart from './Cart';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="z-50 shadow-md bg-white flex fixed w-[100%] justify-between text-xl pt-6 pb-3 px-7">
      <SearchForm />
      <div className="absolute left-[48%]">
        <Link href="/">
          <h1>E-commerce</h1>
        </Link>
      </div>
      <Cart />
    </div>
  );
}

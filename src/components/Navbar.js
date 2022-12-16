import Link from 'next/link';
import SearchForm from './SearchForm';

function NavLink({ children, href }) {
  return (
    <Link
      title={children}
      className="transition ease-in mx-4 hover:text-teal-400 duration-150"
      href={href}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <div className="z-50 bg-white flex fixed w-[100%] justify-between text-xl pt-6 pb-4 px-7">
      <h1>LOGO</h1>
      <div className="absolute left-[40%]">
        <NavLink href="#">Ropa</NavLink>
        <NavLink href="#">Electrónicos</NavLink>
        <NavLink href="#">Zapatos</NavLink>
      </div>
      <div className="">
        <SearchForm />
      </div>
    </div>
  );
}

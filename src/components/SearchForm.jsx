import Search from './Icons/SearchIcon';
import { useShopStore } from '../store/ShopStore';

export default function SearchForm() {
  const { setSearchForm } = useShopStore();

  return (
    <div className="flex z-20 justify-start">
      <label
        className="rounded-l-sm border-y border-l p-1 border-slate-200"
        htmlFor="input"
      >
        <Search />
      </label>
      <input
        onChange={(e) => setSearchForm(e.target.value)}
        placeholder="Search for items"
        id="input"
        className="rounded-r-sm transition-[width] duration-700 text-sm focus:pl-3 focus:outline-none focus:p-1 w-0 focus:w-full border-y border-r bg-white border-slate-200"
      />
    </div>
  );
}

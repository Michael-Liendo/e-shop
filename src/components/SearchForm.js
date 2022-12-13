import Search from './Icons/SearchIcon';

export default function SearchForm() {
  return (
    <div className="flex">
      <input
        id="input"
        className="transition-[width] duration-[1500ms] text-sm focus:pl-3 focus:outline-none focus:p-1 w-0 focus:w-full border-y border-l bg-white border-slate-200"
      />
      <label className="border-y border-r p-1 border-slate-200" htmlFor="input">
        <Search />
      </label>
    </div>
  );
}

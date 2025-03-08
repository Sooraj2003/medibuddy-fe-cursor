const SearchBar = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-4">
      <label className="input input-bordered flex items-center gap-2 bg-white shadow-md rounded-full px-6 py-3">
        <input 
          type="text" 
          className="grow bg-transparent border-none outline-none text-[15px] placeholder:text-gray-400" 
          placeholder="Find lab tests, diagnostics centres" 
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-5 w-5 text-[#4285F4]">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" 
          />
        </svg>
      </label>
    </div>
  );
};

export default SearchBar;

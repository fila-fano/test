import React, { useState } from "react";
import { Search } from "lucide-react"; // Optional icon

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
    
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center max-w-md mx-auto mt-6 bg-white border border-gray-300 rounded-full shadow-sm px-4 py-2"
    >
      <Search className="text-gray-500 w-5 h-5 mr-2" />
      <input
        type="text"
        className="flex-1 outline-none bg-transparent text-gray-800"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="ml-2 bg-indigo-600 text-white px-4 py-1 rounded-full hover:bg-indigo-700 transition"
      >
        Go
      </button>
    </form>
  );
};

export default SearchBar;

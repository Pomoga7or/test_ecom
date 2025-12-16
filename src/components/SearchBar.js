const SearchBar = ({ searchTerm, onSearchChange, priceRange, onPriceRangeChange }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Поиск товаров..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200 pl-14"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
            Фильтр по цене:
          </span>
          
          <div className="flex flex-wrap gap-2 flex-1">
            <button
              onClick={() => onPriceRangeChange({ min: 0, max: Infinity })}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                priceRange.min === 0 && priceRange.max === Infinity
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Все товары
            </button>
            <button
              onClick={() => onPriceRangeChange({ min: 0, max: 10000 })}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                priceRange.min === 0 && priceRange.max === 10000
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              До 10 000 ₽
            </button>
            <button
              onClick={() => onPriceRangeChange({ min: 10000, max: 50000 })}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                priceRange.min === 10000 && priceRange.max === 50000
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              10 000 - 50 000 ₽
            </button>
            <button
              onClick={() => onPriceRangeChange({ min: 50000, max: 100000 })}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                priceRange.min === 50000 && priceRange.max === 100000
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              50 000 - 100 000 ₽
            </button>
            <button
              onClick={() => onPriceRangeChange({ min: 100000, max: Infinity })}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                priceRange.min === 100000 && priceRange.max === Infinity
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              От 100 000 ₽
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
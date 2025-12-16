import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import { fetchProducts } from './mockData';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">Загрузка...</p>
            </div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <svg
              className="w-24 h-24 text-gray-300 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-500 text-xl">Товары не найдены</p>
            <p className="text-gray-400 mt-2">
              Попробуйте изменить поисковый запрос или фильтры
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={setSelectedProduct}
              />
            ))}
          </div>
        )}
      </main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;
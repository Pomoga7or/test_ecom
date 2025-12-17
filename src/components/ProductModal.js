import { useEffect } from 'react';
import { formatPrice } from '../mockData';

const ProductModal = ({ product, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900  rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center z-10 transition-colors border border-purple-800/30"
          aria-label="Закрыть"
        >
          <svg
            className="w-4 h-4 text-purple-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-800">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-purple-900/50 text-purple-300 text-sm rounded-md mb-3">
                {product.category}
              </span>
              <h2 className="text-2xl font-bold text-white mb-4">
                {product.title}
              </h2>
              <p className="text-gray-300 text-base mb-6 leading-relaxed">
                {product.description}
              </p>
              <p className="text-3xl font-bold text-purple-200 mb-6">
                {formatPrice(product.price)}
              </p>
            </div>

            <button className="w-full bg-purple-700 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Купить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
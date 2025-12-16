import { formatPrice } from '../mockData';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      className="group bg-gray-900 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden "
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Легкое затемнение для контраста */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      <div className="p-4">
        <div className="mb-3">
          <span className="text-xs font-medium text-purple-300 bg-purple-900/50 px-2 py-1 rounded-md inline-block mb-2">
            {product.category}
          </span>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors duration-300 line-clamp-2">
            {product.title}
          </h3>
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-800">
          <div>
            <p className="text-4xl font-bold text-purple-200">
              {formatPrice(product.price)}
            </p>
          </div>
          
          
        </div>
      </div>
      
      {/* Тонкое свечение при наведении */}
      <div className="absolute inset-0 rounded-xl " />
    </div>
  );
};

export default ProductCard;
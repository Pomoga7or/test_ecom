import React from 'react';
import { formatPrice } from '../mockData';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden group"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-xs text-gray-600 mb-3">{product.category}</p>
        <p className="text-xl font-bold text-blue-600">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
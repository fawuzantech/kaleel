// src/components/ProductList.tsx
'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          weight={product.weight}
          purity={product.purity}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;

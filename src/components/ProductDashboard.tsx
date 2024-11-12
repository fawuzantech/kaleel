// src/components/ProductDashboard.tsx
'use client'
import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/reducers/productsSlice';

const ProductDashboard: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Access form data using FormData API
    const formData = new FormData(e.currentTarget);

    // Create product object from form inputs
    const product = {
      id: Date.now(),
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      weight: Number(formData.get('weight') || 0),
      purity: formData.get('purity') as string,
      price: Number(formData.get('price') || 0),
      image: formData.get('image') as string,
    };

    // Dispatch the product to Redux
    dispatch(addProduct(product));

    // Reset form fields after submission
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" />
      <textarea name="description" placeholder="Description" />
      <input name="weight" type="number" placeholder="Weight (g)" />
      <input name="purity" placeholder="Purity" />
      <input name="price" type="number" placeholder="Price" />
      <input name="image" placeholder="Image URL" />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductDashboard;

// src/components/ProductCard.tsx
'use client'
import React from 'react';
import { Card } from 'react-bootstrap';

interface ProductCardProps {
  name: string;
  description: string;
  weight: number;
  purity: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, weight, purity, price, image }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} alt={name} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Card.Text>Weight: {weight}g</Card.Text>
      <Card.Text>Purity: {purity}</Card.Text>
      <Card.Text>Price: ${price}</Card.Text>
    </Card.Body>
  </Card>
);

export default ProductCard;

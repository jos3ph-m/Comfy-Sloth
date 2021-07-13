import React from 'react';
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    <h5 style={{ textTransform: 'none' }}>
      Sorry no products match your search...
    </h5>;
  }
  return <GridView products={products}>product list</GridView>;
};

export default ProductList;

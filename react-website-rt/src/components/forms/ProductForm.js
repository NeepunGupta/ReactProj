import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = () => {

    const [product, setTitle] = useState('');
  
  
    const handleSubmit = (event) => {
  
      event.preventDefault();
  
      axios.post('http://34.221.226.23:8000', { product })
  
        .then(res => {
  
          console.log(res);
  
          console.log(res.data);
  
        });
  
    };
  
  
    return (
  
      <form onSubmit={handleSubmit}>
  
        <input
  
          type="text"
  
          value={product}
  
          onChange={e => setTitle(e.target.value)}
  
        />
  
        <button type="submit">Add Product</button>
  
      </form>
  
    );
  
  };
  
  
  export default ProductForm;
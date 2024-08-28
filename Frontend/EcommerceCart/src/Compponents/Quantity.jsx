import React, { useState } from 'react';
// import './QuantityIncrementor.css'; // Import your CSS file

const QuantityIncrementor = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="quantity-incrementor-container">
      <div className="quantity-control">
        <button onClick={decrementQuantity} className="quantity-decrement-button">-</button>
      </div>
      <div className="quantity-display">{quantity}</div>
      <div className="quantity-control">
        <button onClick={incrementQuantity} className="quantity-increment-button">+</button>
      </div>
    </div>
  );
};

export default QuantityIncrementor;

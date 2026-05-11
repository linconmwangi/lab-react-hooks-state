import React from 'react'

const Cart = ({ cartItems = [] }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={`${item.id}-${index}`}>{item.name} is in your cart.</li>
          ))
        ) : (
          <li>Your cart is empty.</li>
        )}
      </ul>
    </div>
  )
}

export default Cart

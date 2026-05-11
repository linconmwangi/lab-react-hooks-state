import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState('all')

  const filteredProducts =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === category)

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product])
  }

  const appStyle = {
    minHeight: '100vh',
    backgroundColor: darkMode ? '#121212' : '#ffffff',
    color: darkMode ? '#f5f5f5' : '#111111',
    transition: 'background-color 0.25s ease, color 0.25s ease',
    padding: '1rem'
  }

  return (
    <div style={appStyle}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} onToggle={() => setDarkMode((prev) => !prev)} />

      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="category-select">Filter by Category: </label>
        <select
          id="category-select"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="NonExistent">NonExistent</option>
        </select>
      </div>

      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App

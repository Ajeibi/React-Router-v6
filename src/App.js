import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'


function App() {
  const [cartIsEmpty] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          {/* you can also inline some jsx template also rather than just referencing page components */}
            <Route path="/test" element={(
              <div>
                <h2>Test Page</h2>
                <p>Hello!!!</p>
              </div>
          )} />
          {/* redirects and navigates. react router v 6 redirect is replaced with navigate */}
          <Route path="/redirect" element={<Navigate to="/about" />} />
          {/* conditional redirect when certain needs to be met. e.g can't checkout if cart is empty in a shopping page. redirects you to a page for cartIsEmpty */}
          <Route path="/checkout" element={cartIsEmpty ? <Navigate to="/products" /> : <p>checkout</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [showCart, setShowCart] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const categories = [
    "All Products",
    "Audio",
    "Wearables",
    "Footwear",
    "Accessories",
    "Electronics",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSidebarOpen(false);
  };

  return (
    <div className="app">
      <Header onCartClick={() => setShowCart(true)} />

      {!showCart ? (
        <>
          {/* Mobile Hamburger */}
          <button
            className="hamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>

          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div
              className="sidebar-overlay"
              onClick={() => setSidebarOpen(false)}
            ></div>
          )}

          <main className="main">
            {/* Sidebar */}
            <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
              <div className="sidebar-header">
                <h3>Categories</h3>
              </div>

              <div className="category-list">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={
                      selectedCategory === category
                        ? "category-button active"
                        : "category-button"
                    }
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </aside>

            {/* Products */}
            <section className="products-section">
              <div className="section-heading">
                <p className="eyebrow">FEATURED COLLECTION</p>

                <h1>Discover Our Products</h1>

                <p>Find quality products for your everyday needs.</p>

                <div className="search-box">
                  <span>⌕</span>

                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <ProductList
                searchTerm={searchTerm}
                selectedCategory={selectedCategory}
              />
            </section>
          </main>
        </>
      ) : (
        <main className="cart-page">
          <button className="back-button" onClick={() => setShowCart(false)}>
            ← Continue Shopping
          </button>

          <Cart />
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;

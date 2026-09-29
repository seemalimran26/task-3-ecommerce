import { useState } from "react";
import products from "../data/Products";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  const [open, setOpen] = useState(false);

  const categories = [
    "All Products",
    ...new Set(products.map((product) => product.category)),
  ];

  const handleCategory = (category) => {
    setSelectedCategory(category);
    setOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Open categories"
      >
        ☰
      </button>

      {/* Overlay */}
      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="sidebar-top">
          <h3>Categories</h3>
        </div>

        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;

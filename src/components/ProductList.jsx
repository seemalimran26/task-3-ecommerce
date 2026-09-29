import products from "../data/Products";
import ProductCard from "./ProductCard";

function ProductList({ searchTerm, selectedCategory }) {
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Products" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="product-grid">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="no-products">
          <h3>No products found</h3>
          <p>Try another search or category.</p>
        </div>
      )}
    </div>
  );
}

export default ProductList;

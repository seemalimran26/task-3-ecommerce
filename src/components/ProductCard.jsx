import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <span className="category">{product.category}</span>

        <h3>{product.name}</h3>

        <p className="price">${product.price.toFixed(2)}</p>

        <button className="add-button" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

function Header({ onCartClick }) {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div className="logo">ShopEase</div>

      <button className="header-cart" onClick={onCartClick}>
        <ShoppingCart size={18} />
        <span>Cart ({totalItems})</span>
      </button>
    </header>
  );
}

export default Header;

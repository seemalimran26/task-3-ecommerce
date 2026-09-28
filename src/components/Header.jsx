import { useCart } from "../context/CartContext";

function Header() {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div className="logo">ShopEase</div>

      <div className="header-cart">🛒 Cart ({totalItems})</div>
    </header>
  );
}

export default Header;

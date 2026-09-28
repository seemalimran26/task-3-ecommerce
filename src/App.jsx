import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <section className="products-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FEATURED COLLECTION</p>

              <h1>Discover Our Products</h1>

              <p>Find quality products for your everyday needs.</p>
            </div>
          </div>

          <ProductList />
        </section>

        <Cart />
      </main>
    </div>
  );
}

export default App;

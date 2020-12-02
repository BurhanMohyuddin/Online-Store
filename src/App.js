import React from "react";
import "./App.css";
import ProductsContextProvider from './Global/ProductContext';
import Products from './Components/Products';

function App() {
  return (
    <div>
      <>
        <nav>
          <ul className="left">
            <li>
              <a href="/#">PakExpress</a>
            </li>
          </ul>
          <div className="spacer" />
          <ul className="right">
            <li>
              <a href="/#">
                <span className="ShoppingCart">
                  <i className="fas fa-cart-plus"></i>
                  <span className="CountCart">0</span>{" "}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </>
      <>
      <div className="container">
        <header>
          <div className="text">
            <div>
              <h1>Welcome</h1>
              <p>Enjoy online shopping with PakExpress</p>
            </div>

          </div>
        </header>
      </div>
      </>
      <ProductsContextProvider>
        <div className="container">
          <Products/>
        </div>
      </ProductsContextProvider>
    </div>
  );
}

export default App;

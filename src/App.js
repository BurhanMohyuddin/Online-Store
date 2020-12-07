import React, {useContext} from 'react';
import './App.css';
import ProductsContextProvider from './Global/ProductContext';
import CartContextProvider, {CartContext} from './Global/CartContext';
import Products from './Components/Products';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Cart from './Components/Cart';
import SearchNotFound from './Components/SearchNotFound';

const App = () => {
  // const {qty} = useContext(CartContext);
  // console.log("qty", qty);

  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
        <BrowserRouter>
      <>
        <nav>
          <ul className="left">
            <li>
              <Link to="/">PakExpress</Link>
            </li>
          </ul>
          <div className="spacer" />
          <ul className="right">
            <li>
              <Link to="cart">
                <span className="ShoppingCart">
                  <i className="fas fa-cart-plus"></i>
                  <span className="CountCart">0</span>{" "}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </>
      <Switch>
        <Route path="/" exact component={Products}/>
        <Route path="/cart" exact component={Cart}/>
        <Route component={SearchNotFound}/>
      </Switch>
        </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;

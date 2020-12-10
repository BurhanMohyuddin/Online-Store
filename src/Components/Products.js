import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../Global/ProductContext";
import {CartContext} from '../Global/CartContext';
import "./Products.css";

// let newValues = 0;
const Products = () => {
  const { products } = useContext(ProductsContext);
  const {dispatch} = useContext(CartContext);
  const [input, setInput] = useState(""); 
  const [items, setItems] = useState(products);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  
  const changeHandler= (e) => {
    let value = e.target.value;
    value = value.replace(/^\s+/, "");
    console.log("input ", value);
    setInput(value);
    if (value.trim() === "") {
      // reset search results
      setItems(products);
      return;
    }
    
    const newValues = products.filter((product) => product.name.toLowerCase().indexOf(input.toLowerCase()) !== -1)
     setItems(newValues);
  }

  const handleSorting = (e) => {
    console.log("handle sorting asc", e);
    let filteredProducts = products;
    if (e === "price_asc") {
      const x = filteredProducts.slice().sort((a, b) => a.price - b.price);
      // console.log("value of x asc",x)
      setItems(x);
    }
    if (e === "price_desc") {
      const x = filteredProducts.slice().sort((a, b) => b.price - a.price);
      // console.log("value of x des",x)
      setItems(x);
    }
    
  }
  

  const handleFilterChange = (e , filterType) => {
    
    switch(filterType) {
      case "min":
        setMin(e.target.value)
        break;

      case "max":
        setMax(e.target.value)
        break;

      default:break;
    }
    
  }

  useEffect(() => {
    let filteredProducts = products;

    if (min !== "") {
      console.log("min",min);
      filteredProducts = filteredProducts.filter(product => product.price >= min)
    }
    if (max !== "") {
      console.log("max",max);
      filteredProducts = filteredProducts.filter(product => product.price <= max)
    }
    setItems(filteredProducts);
  }, [min,max])
  

  return (
    <div className="container">
        <ul >
          <li className="search-field">
            {/* {console.log("asdasdas",searchValues)} */}
            <input
              className="input"
              type="text"
              name="query"
              placeholder="Search Here"
              value={input}
              onChange={changeHandler}
            />
          </li>
          <div className="spacer" />
          <li className="filter-by-price">
            <input type="number" className="minPrice" onChange={(e) => handleFilterChange(e, "min")} placeholder="Min Price" />
            <input type="number" className="maxPrice" onChange={(e) => handleFilterChange(e, "max")} placeholder="Max Price" />   
          </li>
          <li className="dropdown">
          <select
              onChange={(e) => handleSorting(e.target.value)}
              style={{ borderRadius: "8px" }}
            >
              <option> Select</option>
              <option  value="price_asc">Price: Ascending</option>
              <option  value="price_desc">Price: Descending</option>
            </select>
          </li>
        </ul>
        <header>
          <div className="text">
            <div>
              <h1>Welcome</h1>
              <p>Enjoy online shopping with PakExpress</p>
            </div>
          </div>
        </header>
        {items.length > 0 ? <div className="products">
          {items.map((item) => (
            <div className="product" key={item.id}>
            <div className="product-image">
                <img src={item.image} alt="not found" sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"/>
            </div>
            <div className="product-details">
                <div className="product-name">{item.name}</div>
                <div className="product-price">${item.price}.00</div>
            </div>
            <div className="add-to-cart" onClick={()=> dispatch({type:'ADD_TO_CART', id: item.id, item})}>add to cart</div>
            {item.status === "hot" ? <div className="hot">Hot</div> : ""}
            {item.status === "new" ? <div className="new">New</div> : ""}
            </div>
        ))}
        </div>
        :
        <div className="products">
          {console.log("filtered items",items)}
        {items.map((item) => (
            <div className="product" key={item.id}>
            <div className="product-image">
                <img src={item.image} alt="not found" sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"/>
            </div>
            <div className="product-details">
                <div className="product-name">{item.name}</div>
                <div className="product-price">${item.price}.00</div>
            </div>
            <div className="add-to-cart" onClick={()=> dispatch({type:'ADD_TO_CART', id: item.id, item})}>add to cart</div>
            {item.status === "hot" ? <div className="hot">Hot</div> : ""}
            {item.status === "new" ? <div className="new">New</div> : ""}
            </div>
        ))}
        </div> }
        
    </div>
  );
};

export default Products;

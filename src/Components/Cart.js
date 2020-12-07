//rfce
import React, {useContext} from 'react'
import {CartContext} from '../Global/CartContext';
import './Cart.css';


const Cart = () => {
    const {shoppingCart, totalPrice, qty, dispatch} = useContext(CartContext);
    console.log("ShoppingCart",shoppingCart)

    return (
        <div className="cart-container">
            <div className="cart-details" style={{marginTop:'70px'}}>
                {shoppingCart.length > 0 ? shoppingCart.map((cart)=> (
                    <div className="cart" key={cart.id}>
                        <span className="cart-image"><img src={cart.image} alt="not found"/></span>
                        <span className="cart-product-name">{cart.name}</span>
                        <span className="cart-product-price">${cart.price}.00 </span>
                        <span className="inc" onClick={() => dispatch({type:'INC', id: cart.id, cart})}>
                             <i className="fas fa-plus"></i></span>
                        <span className="cart-product-quantity">{cart.qty}</span>
                        <span className="dec" onClick={() => dispatch({type:'DEC', id: cart.id, cart})}>
                             <i className="fas fa-minus"></i></span>
                        <span className="cart-product-totalPrice">${cart.price * cart.qty}.00</span>
                        <span className="delete-product" onClick={() => dispatch({type:'DELETE', id: cart.id, cart})}> 
                        <i className="fas fa-trash-alt"></i></span>

                    </div>
                )) 
                :
                 "Your Cart Is Currently Empty"}
            </div>
            {shoppingCart.length > 0 ? <div className="cart-summary">
                <div className="summary">
                    <h3>Cart Summary</h3>
                    <div className="total-items">
                        <div className="items">Total Items</div>
                        <div className="items-count">{qty}</div>
                    </div>
                    <div className="total-price">
                        <div className="price">Total Price</div>
                        <div className="items-price">${totalPrice}.00</div>
                    </div>
                </div>
            </div>: ''}
        </div>
    )
}

export default Cart

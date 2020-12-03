import React, {createContext, useState} from 'react';
import iphone from '../assets/iphone.jpg';
import headphone from '../assets/headphone.jpg';
import dslr from '../assets/dslr.jpg';
import console from '../assets/console.jpg';
import keyboard from '../assets/keyboard.jpg';
import smartwatch from '../assets/smartwatch.jpg';
import microphone from '../assets/microphone.jpg';
import phoneCase from '../assets/phoneCase.jpg';
import watch from '../assets/watch.jpg';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState([
        {id:1, name: 'Iphone', price: '1000', image: iphone, status: 'hot'},
        {id:2, name: 'Cannon DSLR', price: '500', image: dslr, status: 'new'},
        {id:3, name: 'Razer Headphone', price: '200', image: headphone, status: 'new'},
        {id:4, name: 'PS4 Console', price: '50', image: console, status: 'hot'},
        {id:5, name: 'Iphone Smart Watch', price: '400', image: smartwatch, status: 'hot'},
        {id:6, name: 'Keyboard', price: '40', image: keyboard, status: 'hot'},
        {id:7, name: 'Microphone', price: '60', image: microphone, status: 'new'},
        {id:8, name: 'Iphone Case', price: '20', image: phoneCase, status: 'hot'},
        {id:9, name: 'New Watch', price: '99', image: watch, status: 'new'},
    ])
    return(
    <ProductsContext.Provider value={{products: [...products]}}>
        {props.children}
    </ProductsContext.Provider>
    )
}

export default  ProductsContextProvider;
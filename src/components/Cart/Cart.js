import React, { useEffect, useState } from 'react';
import CartProduct from '../CartsProduct/CartProduct';
import './Cart.css';

const Cart = ({ products, cart, deleteProduct, choseRandom, clear }) => {

    const [savedCart, setSavedCart] = useState([]);
    const temp = [];


    useEffect(() => {
        for (const id of cart) {
            const product = products.find(product => product.id === id);
            temp.push(product);
        }
        setSavedCart(temp);
    }, [cart])



    return (
        <div className='text-start '>
            <h5 className='title text-center mb-5'>Selected Item</h5>
            <div className="">
                {
                    savedCart.map(item => <CartProduct product={item} deleteProduct={deleteProduct} key={item.id} />)

                }

            </div>
            <div className='r'>
                <button onClick={choseRandom} className='review'>Choose Random</button> <br />
                <button onClick={clear} className='clear mt-2'>Choose Again</button>

            </div>

        </div>
    );
};

export default Cart;
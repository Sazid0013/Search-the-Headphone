import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';


const Shop = () => {
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([]);
    const temp2 = [];


    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [])

    const addToCart = (id) => {
        if (cart.length < 4) {
            if (cart.indexOf(id) === -1)
                setCart([...cart, id]);
        }
    }
    const deleteProduct = (id) => {
        for (const item of cart) {
            if (item !== id)
                temp2.push(item);
        }
        setCart(temp2);
    }

    const choseRandom = () => {
        const random = Math.floor(Math.random() * 4);
        setCart([cart[random]]);
    }

    const clear = () => {
        setCart([]);
    }

    return (
        <div className="">
            <div className="row p-5">
                <div className="col-12 col-lg-8 order-2 order-lg-1">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-lg-3 g-3 mt-4">
                        {
                            products.map(product => <Products product={product} addToCart={addToCart} key={product.id} />)
                        }
                    </div>

                </div>
                <div className="col-12 col-lg-4 bg-info h-100 p-4 order-1 order-lg-2 rounded-3 mt-5">
                    <div className="productCart">
                        <Cart cart={cart} products={products} deleteProduct={deleteProduct} choseRandom={choseRandom} clear={clear} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
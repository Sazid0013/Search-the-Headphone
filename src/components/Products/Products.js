import React from 'react';
import './Product.css';

const Products = ({ product, addToCart }) => {
    const { id, name, price, picture } = product;
    return (
        <div className="col p-2">
            <div className="card h-100">
                <img src={picture} className="img-fluid card-img-top p-1" alt="" />
                <div className="card-body text-start">
                    <h5 className="card-title title ">{name}</h5>
                    <h5 className="card-title price">Price: ৳ {price}</h5>
                </div>

                <div className="card-footer text-center">
                    <button id={id} className="p-0 " onClick={() => { addToCart(id) }}>
                        <p className='p-2'>
                            Add to Choose &nbsp;
                            <i className="fa-solid fa-cart-plus"></i>
                        </p>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;
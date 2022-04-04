import React from 'react';
import './CartProduct.css'

const CartProduct = ({ product, deleteProduct }) => {
    const { id, name, price, picture } = product;
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={picture} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    </div>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center p-1">
                    <button onClick={() => { deleteProduct(id) }} id={id} className='dlt-btn'><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
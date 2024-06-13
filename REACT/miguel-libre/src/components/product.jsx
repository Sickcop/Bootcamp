import React from "react";
import '../App.css'

function Product(props) {
    return (
        <div className="product-list">
            <div className="product-item">
                <img src={props.img} alt="Producto 1"/>
                <h3>{props.nombre}</h3>
                <p>Precio:</p>
                <p>{props.precio}</p>
            </div>
        </div>
    )
}

export default Product;
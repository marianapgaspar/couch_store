import {Link} from "react-router-dom";
import React from "react";

function ProductsMyCart(props) {
    const [data, setData] = React.useState(null);
    fetch("http://localhost:3001/api/get-product?id="+props.product_id, {
          method: "GET"
        }).then((response) =>{
            response.json().then((data) => {
                setData(data)
            });
        })
    return (
        <div className="cart-product">
            {data ? <div>
                <div className="cart-product-image" style={{"backgroundImage":  data.image, "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}><Link component="button"></Link></div>
                <div className="cart-product-text">
                    <div className="cart-product-text-title">{data.name}</div>
                    <div className="cart-product-text-description">{data.description}</div>
                </div>
                <div className="cart-product-price">
                    <div className="cart-product-price-total">
                        R$ {data.price}
                    </div>  
                    <div className="cart-remove-all"><Link component="button"><u>Remove</u></Link></div>
                </div>
            </div> 
            : ""}
        </div>
    )
}

export default ProductsMyCart;
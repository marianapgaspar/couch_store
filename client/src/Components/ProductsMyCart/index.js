import {Link} from "react-router-dom";
import React from "react";
function ProductsMyCart(props) {
    const [data, setData] = React.useState(null);
    const [loaded, setLoad] = React.useState(false);

    if (!loaded){
        fetch("http://localhost:3001/api/get-product?id="+props.product_id, {
          method: "GET"
        }).then((response) =>{
            response.json().then((data) => {
                setData(data)
                setLoad(true)
            });
        })
    }

    return (
        <div>
            {data ? <div  className="cart-product">
                <div className="cart-product-image" style={{"backgroundImage":  data[0].image, "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}><Link component="button"></Link></div>
                <div className="cart-product-text">
                    <div className="cart-product-text-title">{data[0].name}</div>
                    <div className="cart-product-text-description">{data[0].description}</div>
                </div>
                <div className="cart-product-price">
                    <div className="cart-product-price-total">
                        R$ {data[0].price}
                    </div>  
                    <div className="cart-remove-all"><Link component="button"><u>Remove</u></Link></div>
                </div>
            </div> 
            : ""}
        </div>
    )
}

export default ProductsMyCart;
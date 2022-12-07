import {Link} from "react-router-dom";
import ProductsMyCart from "../ProductsMyCart";
import React from "react";

function MyCartComponent() {
    
    const [data, setData] = React.useState(null);
    const userId =  sessionStorage.getItem('id');
    fetch("http://localhost:3001/api/user-products?user_id="+userId, {
          method: "GET"
        }).then((response) =>{
            response.json().then((data) => {
                setData(data)
            });
        })
    return (
        <div className="cart-products">
            {
                !data ? "Loading..." : 
                Object.keys(data).map((e) => {
                    return (<ProductsMyCart key={e} product_id={data[e].product_id}/>)
                })
            }
            <div className="cart-product">
                <div className="cart-product-image" style={{"backgroundImage": "url('https://superbdemo.com/themes/superb-ecommerce/wp-content/uploads/2022/07/wc-11-300x300.png')", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}><Link component="button"></Link></div>
                <div className="cart-product-text">
                    <div className="cart-product-text-title">Monarquy Chair</div>
                    <div className="cart-product-text-description">Is not just a chair</div>
                </div>
                <div className="cart-product-price">
                    <div className="cart-product-price-total">
                        $ 500,00
                    </div>  
                    <div className="cart-remove-all"><Link component="button"><u>Remove</u></Link></div>
                </div>
            </div>
            <div className="cart-product">
                <div className="cart-product-image" style={{"backgroundImage": "url('https://superbdemo.com/themes/superb-ecommerce/wp-content/uploads/2022/07/wc-11-300x300.png')", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}><Link component="button"></Link></div>
                <div className="cart-product-text">
                    <div className="cart-product-text-title">Chair</div>
                    <div className="cart-product-text-description">Is not just a chair</div>
                </div>
                <div className="cart-product-price">
                    <div className="cart-product-price-total">
                        $ 500,00
                    </div>  
                    <div className="cart-remove-all"><Link component="button"><u>Remove</u></Link></div>
                </div>
            </div>
        </div>
    )
}

export default MyCartComponent;
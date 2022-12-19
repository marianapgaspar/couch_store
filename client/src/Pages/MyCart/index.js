import {Link} from "react-router-dom";
import React from "react";
import ProductsMyCart from "../../Components/ProductsMyCart";

export var result = 0;
export var price = 0;
export var total = 0;
function MyCart(){
    const hideMyCart = () => {
        var modal = document.getElementById("modalMyCart");
        modal.style.display = "none";
    }
    const [data, setData] = React.useState(null);
    const [loaded, setLoad] = React.useState(false);
    const [totalInfo, setInfo] = React.useState(null);
    const userId =  sessionStorage.getItem('id');

    const getTotalInfo = () => {
        fetch("http://localhost:3001/api/get-total?id="+userId, {
            method: "GET"
        }).then((response) =>{
            response.json().then((data) => {
                setInfo({'total': data[0].total, 'price': data[0].price});
            });
        })
    }

    if (!loaded){
        price = 0;
        total = 0;
        fetch("http://localhost:3001/api/user-products?user_id="+userId, {
            method: "GET"
          }).then((response) =>{
              response.json().then((data) => {
                    setData(data)
                    setLoad(true)
              });
          })
        getTotalInfo()
    }
    
    const checkout = () => {
        fetch("http://localhost:3001/api/payment/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: [
              { id: 1, quantity: 3 },
              { id: 2, quantity: 1 },
            ],
          }),
        })
          .then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
          })
          .then(({ url }) => {
            window.location = url
          })
          .catch(e => {
            console.error(e.error)
          })
    }
    return (
        <div className="modal ">
            <div className="modal-content">
                <div className="modal-display" style={{display: "none"}} id="modalMyCart">
                    <div className="modal-header">
                        <div className="modal-header-content"><div className="cart-header">
                            <div className="cart-title">Shopping cart</div>
                        </div> </div>
                        
                        <div className="modal-header-close"><Link component="button" onClick={hideMyCart}><i className="fa fa-times"></i></Link></div>
                    </div>
                    <div className="modal-body">
                        <div className="cart-products">
                        {
                            !data ? "Loading..." : 
                            Object.keys(data).map((e) => {
                                return (<ProductsMyCart key={e} product_id={data[e].product_id}/>)
                            })
                        }
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="cart-footer">
                        {
                            !totalInfo ? "" : 
                            <div className="cart-text">
                                <div className="cart-subtext">
                                    <div className="cart-subtext-title">
                                        Sub-total
                                    </div>
                                    <div className="cart-subtext-quantity">
                                        {totalInfo.total} items
                                    </div>
                                </div>
                                <div className="cart-total">R$ {totalInfo.price}</div>
                                <div className="cart-buttons">
                                    <button className="btn-outline-danger" onClick={hideMyCart}>Cancel</button>
                                    <button className="btn-outline-success" onClick={checkout}>Continue</button>
                                </div>
                            </div>
                        }
                        </div>
                    </div>
                </div>
                
            </div>        
        </div>
    )
}
export default MyCart;
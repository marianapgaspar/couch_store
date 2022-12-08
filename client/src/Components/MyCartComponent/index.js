import ProductsMyCart from "../ProductsMyCart";
import React from "react";

export var products = [];

function MyCartComponent() {
    
    const [data, setData] = React.useState(null);
    const [loaded, setLoad] = React.useState(false);
    const userId =  sessionStorage.getItem('id');
    if (!loaded){
        fetch("http://localhost:3001/api/user-products?user_id="+userId, {
            method: "GET"
          }).then((response) =>{
              response.json().then((data) => {
                  setData(data)
                  setLoad(true)
                  console.log(data)
                  products = data;
              });
          })
    }
    
    return (
        <div className="cart-products">
            {
                !data ? "Loading..." : 
                Object.keys(data).map((e) => {
                    return (<ProductsMyCart key={e} product_id={data[e].product_id}/>)
                })
            }
        </div>
    )
}

export default MyCartComponent;
import {Link} from "react-router-dom";

function MyCart(){
    const hideMyCart = () => {
        var modal = document.getElementById("modalMyCart");
        modal.style.display = "none";
    }
    return (
        <div className="modal">
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
                    </div>
                    <div className="modal-footer">
                        <div className="cart-footer">
                            <div className="cart-text">
                                <div className="cart-subtext">
                                    <div className="cart-subtext-title">
                                        Sub-total
                                    </div>
                                    <div className="cart-subtext-quantity">
                                        3 items
                                    </div>
                                </div>
                                <div className="cart-total">R$ 6,00</div>
                            </div>
                            <div className="cart-buttons">
                                <button className="btn-outline-danger" onClick={hideMyCart}>Cancel</button>
                                <button className="btn-outline-success">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>        
        </div>
    )
}
export default MyCart;
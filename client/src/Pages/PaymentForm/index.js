import {Link} from "react-router-dom";
import React from "react";

function PaymentForm(){
    const hidePaymentForm = () => {
        var modal = document.getElementById("modalPaymentForm");
        modal.style.display = "none";
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-display border-dark" style={{display: "none"}} id="modalPaymentForm">
                    <div className="modal-header">
                        <div className="modal-header-content"><div className="cart-header">
                            <div className="cart-title">Shopping cart</div>
                        </div> </div>
                        
                        <div className="modal-header-close"><Link component="button" onClick={hidePaymentForm}><i className="fa fa-times"></i></Link></div>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-control">
                                <input className="form-input w-14" name="email" id="email" placeholder="E-mail"/>
                            </div>
                            <div className="form-control">
                                <input className="form-input w-14" name="password" id="password" type="password" placeholder="Password"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <div className="cart-footer">
                            <div className="cart-text">
                                <div className="cart-buttons">
                                    <button className="btn-outline-danger" onClick={hidePaymentForm}>Cancel</button>
                                    <button className="btn-outline-success">Continue</button>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                
            </div>        
        </div>
    )
}
export default PaymentForm;
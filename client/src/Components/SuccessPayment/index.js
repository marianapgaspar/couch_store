import {Link} from "react-router-dom";
import React from "react";

function SuccessPayment(){
    return (
        <div className="modal ">
            <div className="modal-content">
                <div className="modal-display" id="modalMyCart">
                    <div className="modal-header">
                        <div className="modal-header-content"><div className="cart-header">
                            <div className="cart-title">Status of your payment</div>
                        </div> </div>
                        
                        <div className="modal-header-close"><Link component="button" to="/"><i className="fa fa-times"></i></Link></div>
                    </div>
                    <div className="modal-body">
                        <div className="message-success">
                            <div className="message-image"><img width="100" src="https://imagepng.org/wp-content/uploads/2019/12/check-icone-1-scaled.png" alt="" loading="lazy"  sizes="(max-width: 193px) 100vw, 193px"/></div>
                            <div className="message-title">Your payment was successful!</div>
                            <div className="message-description">Thank you for buying with us. We will be in contact with you for more informations.</div>
                            
                        </div>
                    </div>
                    <div className="modal-footer"></div>
                </div>
                
            </div>        
        </div>
    )
}

export default SuccessPayment;
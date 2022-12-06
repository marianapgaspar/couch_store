import {Link} from "react-router-dom";

function Products(props) {
    return (
        <div className="for-sale-product">
            <div className="for-sale-image" style={{'backgroundImage': props.image, 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'cover'}}><Link to="/product?id=1"></Link></div>
            <div className="for-sale-text">
                <div className="for-sale-title">{props.name}</div>
                <div className="for-sale-price">R$ {props.price}</div>
            </div>
        </div>
    )
}

export default Products;
import {Link} from "react-router-dom";

function LoginLink(){
    return (
        <div className="login-link"><Link to="/login">Login | </Link><Link to="/"> Home</Link></div>
    )
}
export default LoginLink;
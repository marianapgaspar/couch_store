import {Link} from "react-router-dom";

function NavBar(){
    const showMyCart = () => {
        var modal = document.getElementById("modalMyCart");
        modal.style.display = "block";
    }
    return (
        <div>
            <ul className="nav-ul">
                <li className="header-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="header-item sub-nav-a">
                    <Link component="button" className="a-drop-down">Categories</Link>  
                    <ul className="sub-nav-ul first">
                        <li className="header-item">
                            <Link to="/categories">Badroom</Link>
                        </li>
                    </ul>
                    <ul className="sub-nav-ul">
                        <li className="header-item">
                            <Link to="/categories">Living room</Link>
                        </li>
                    </ul>
                    <ul className="sub-nav-ul">
                        <li className="header-item">
                            <Link to="/categories">Dining</Link>
                        </li>
                    </ul>
                    <ul className="sub-nav-ul">
                        <li className="header-item">
                            <Link to="/categories">Home office</Link>
                        </li>
                    </ul>
                </li>
                <li className="header-item">
                    <Link to="/sign-up">Sign-up</Link>
                </li>
                <li className="header-item">
                    <Link component="button" onClick={showMyCart}>My Cart</Link>
                </li>
            </ul>
        </div>
    )
}
export default NavBar;
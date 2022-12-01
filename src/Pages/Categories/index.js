import {Link} from "react-router-dom";
 
function Categories(){
    return (
        <div className="categories">
            <section className="page">
                    <div className="page-text pl-25 pr-25 pt-8">
                        <div className="page-title">Products of Bathroon</div>
                    </div>
                    <div className="search pl-25 pr-25 mt-3">
                        <form className="form-search">
                            <div className="group-input-button">
                                <input className="search-input" type="text" placeholder="Search"/>
                                <button className="search-button"><i className="fa fa-search"></i></button>
                            </div>
                        </form>
                    </div>
                    <div className="for-sale default-padding padding-menu">
                        <div className="for-sale-product">
                            <div className="for-sale-image" style={{'backgroundImage': 'url("https://superbdemo.com/themes/superb-ecommerce/wp-content/uploads/2022/07/wc-11-300x300.png")', 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'cover',}}><Link to="/product?id=1"></Link></div>
                            <div className="for-sale-text">
                                <div className="for-sale-title">Just a chair</div>
                                <div className="for-sale-price">R$ 50,00</div>
                            </div>
                        </div>
                        <div className="for-sale-product">
                            <div className="for-sale-image" style={{'backgroundImage': 'url("https://superbdemo.com/themes/superb-ecommerce/wp-content/uploads/2022/07/wc-img-1-300x300.png")', 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'cover',}}><Link to="/product?id=1"></Link></div>
                            <div className="for-sale-text">
                                <div className="for-sale-title">Just a chair</div>
                                <div className="for-sale-price">R$ 50,00</div>
                            </div>
                        </div>
                        <div className="for-sale-product">
                            <div className="for-sale-image" style={{'backgroundImage': 'url("https://superbdemo.com/themes/superb-ecommerce/wp-content/uploads/2022/07/wc-12-300x300.png")', 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'cover',}}><Link to="/product?id=1"></Link></div>
                            <div className="for-sale-text">
                                <div className="for-sale-title">Just a chair</div>
                                <div className="for-sale-price">R$ 50,00</div>
                            </div>
                        </div>
                        <div className="for-sale-product">
                            <div className="for-sale-image" style={{'backgroundImage': 'url("https://superbdemo.com/themes/superb-ecommerce/wp-content/uploads/2022/07/wc-15-300x300.png")', 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'cover',}}><Link to="/product?id=1"></Link></div>
                            <div className="for-sale-text">
                                <div className="for-sale-title">Just a chair</div>
                                <div className="for-sale-price">R$ 50,00</div>
                            </div>
                        </div>
                        <div className="for-sale-product">
                            <div className="for-sale-image" style={{'backgroundImage': 'url("https://superbdemo.com/themes/superb-ecommerce/wp-content/uploads/2022/07/wc-16-300x300.png")', 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'cover',}}><Link to="/product?id=1"></Link></div>
                            <div className="for-sale-text">
                                <div className="for-sale-title">Just a chair</div>
                                <div className="for-sale-price">R$ 50,00</div>
                            </div>
                        </div>
                        <div className="for-sale-product">
                            <div className="for-sale-image" style={{'backgroundImage': 'url("https://superbdemo.com/themes/superb-ecommerce/wp-content/uploads/2022/07/wc-18-300x300.png")', 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'cover',}}><Link to="/product?id=1"></Link></div>
                            <div className="for-sale-text">
                                <div className="for-sale-title">Just a chair</div>
                                <div className="for-sale-price">R$ 50,00</div>
                            </div>
                        </div>
                    </div>       
                    <div className="pagination pl-25 pr-25">
                        <ul className="pagination-numbers">
                            <li>
                                <Link to="/categories?page=">{'<'}</Link>
                            </li>
                        </ul>
                        <ul className="pagination-numbers">
                            <li>
                               <Link to="/categories?page=">1</Link>
                            </li>
                        </ul>
                        <ul className="pagination-numbers">
                            <li>
                               <Link to="/categories?page=">2</Link>
                            </li>
                        </ul>
                        <ul className="pagination-numbers">
                            <li>
                               <Link to="/categories?page=">3</Link>
                            </li>
                        </ul>
                        <ul className="pagination-numbers">
                            <li>
                               <Link to="/categories?page=">{'>'}</Link>
                            </li>
                        </ul>
                    
                    </div>
                </section>
        </div>
    )
}
export default Categories;
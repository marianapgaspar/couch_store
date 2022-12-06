import {Link} from "react-router-dom";
import Products from "../../Components/Products";
import React from "react";

function Categories(){
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("http://localhost:3001/api/products")
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);

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
                        {
                            !data ? "Loading..." : 

                            Object.keys(data).map((e) => {
                                return (<Products key={e} name={data[e].name} price={data[e].price} image={data[e].image} id={data[e].id}/>)
                            })
                            
                        }

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
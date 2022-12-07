import Products from "../../Components/Products";
import React from "react";

function Home(){
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("http://localhost:3001/api/products")
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);
    return (
        <div className="home">
            <div className="hero-image">
                <div className="hero" >
                    <div className="hero-content">
                        <div className="hero-subject">We have the highest quality furniture</div>
                        <div className="hero-buttons"><button className="btn-warning">SHOP NOW</button><button className="btn-outline-secondary">BEST PRICES</button></div>
                    </div>
                </div>
            </div>       
        
            <section className="page">
                <div className="most-buy default-padding">
                    <button className="most-buy-direction">{'<'}</button>
                    <div className="most-buy-category">
                        <div className="most-buy-text">
                            <div className="most-buy-title">
                                My new chair
                            </div>
                            <div className="most-buy-description">
                                Lorem ipsum dolor
                            </div>
                            <div className="most-buy-btn">
                                <button className="btn-warning">VERIFICAR</button>
                            </div>
                        </div>
                        <div className="most-buy-image">
                            <img width="150" src="https://wpthemes.spiraclethemes.com/mestore/wp-content/uploads/sites/2/2022/05/image_2022_04_12T15_38_06_115Z.png" alt="" loading="lazy"  sizes="(max-width: 193px) 100vw, 193px"/>
                        </div>
                    </div>
                    <div className="most-buy-category">
                        <div className="most-buy-text">
                            <div className="most-buy-title">
                                My new chair
                            </div>
                            <div className="most-buy-description">
                                Lorem ipsum dolor
                            </div>
                            <div className="most-buy-btn">
                                <button className="btn-warning">VERIFICAR</button>
                            </div>
                        </div>
                        <div className="most-buy-image">
                            <img width="150" src="https://wpthemes.spiraclethemes.com/mestore/wp-content/uploads/sites/2/2022/05/image_2022_04_12T15_38_06_115Z.png" alt="" loading="lazy"  sizes="(max-width: 193px) 100vw, 193px"/>
                        </div>
                    </div>
                    <div className="most-buy-direction">></div>
                </div>
                <div className="propaganda default-padding bg-light">
                    <img width="700" src="https://images.unsplash.com/photo-1633110187937-6e3b2f36dfca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" loading="lazy"  sizes="(max-width: 193px) 100vw, 193px"/>
                    <div className="propaganda-text">
                        <div className="propaganda-title">
                            Our mission is
                        </div>
                        <div className="propaganda-description">
                            Our aim is to bring to our readers a steady set of resources that would help them visualize, create and maintain beautiful homes.
                        </div>
                    </div>           
                </div>
                    
                <div className="for-sale default-padding mt-3 mb-3">
                        {
                            !data ? "Loading..." : 

                            Object.keys(data).map((e) => {
                                return (<Products key={e} name={data[e].name} price={data[e].price} image={data[e].image} id={data[e].id}/>)
                            })
                            
                        }
                </div>
                
                <div className="advantages default-padding  bg-default">
                    <div className="advantages-itens">
                        <div className="advantages-itens-content">
                            <img className="advantages-image"  decoding="async" src="https://wp-themes.com/wp-content/themes/neve/assets/img/starter-content/icon-02.svg" alt="" width="48" height="48"/>
                        </div>
                        <div className="advantages-title">High quality</div>
                        <div className="advantages-description">Our guiding principles ensure to consistently deliver the greatest possible service experience</div>
                    </div>                  
                    <div className="advantages-itens">
                        <div className="advantages-itens-content">
                            <img className="advantages-image"  decoding="async" src="https://wp-themes.com/wp-content/themes/neve/assets/img/starter-content/icon-01.svg" alt="" width="48" height="48"/>
                        </div>
                        <div className="advantages-title">365 days return</div>
                        <div className="advantages-description">We assure our products have the highest quality, if you find any problem with the product, just let us know.</div>
                    </div>
                    <div className="advantages-itens">
                        <img className="advantages-image" decoding="async" src="https://wp-themes.com/wp-content/themes/neve/assets/img/starter-content/icon-03.svg" alt="" width="48" height="48"/>
                        <div className="advantages-title">Hope to dream</div>
                        <div className="advantages-description">Every child should have a good night’s sleep and a bed to call their own.</div>
                    </div>      
                </div> 
                <div className="propaganda default-padding">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.7613993038412!2d-48.88276598457024!3d-26.269406183408808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dea561e5918561%3A0xe4168e8d698a6117!2sR.%20Pav%C3%A3o%2C%20365%20-%20Costa%20e%20Silva%2C%20Joinville%20-%20SC%2C%2089220-200!5e0!3m2!1spt-BR!2sbr!4v1660680033828!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:'0'}} allowFullScreen="" title="uniqueId" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="propaganda-text">
                        <div className="propaganda-title">
                            Visit our store
                        </div>
                        <div className="propaganda-description">
                            We hope to become your one stop source for home design inspiration! We cover architectural innovations, cool homes, ideas for specific rooms, new design trends, products and occasionally decor tips.
                        </div>
                    </div>       
                </div>
            </section>
        </div>
    )
}
export default Home;
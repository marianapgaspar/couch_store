function Footer(){
    return (
        <div>
            <footer className="main-footer">
                <div className="main-footer-text">
                    <div className="main-footer-title">
                        FIND ME
                    </div>
                    <div className="main-footer-description">
                        Rua Pavão 365, Costa e Silva
                    </div>
                    <div className="main-footer-description">
                        Joinville - SC, Brasil
                    </div>
                    <div className="main-footer-link">
                        <div className="social-link">
                            <i className="fa fa-envelope"></i>
                        </div>
                        <div className="social-link">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <div className="social-link">
                            <a href="https://github.com/marianapgaspar" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        </div>
                        <div className="social-link">
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className="main-footer-text">
                    <div className="main-footer-title">
                        ABOUT THIS SITE
                    </div>
                    <div className="main-footer-description">
                        This site was made to improve and concrete my knowledge
                    </div>
                    <div className="main-footer-description">
                        with some languages like: NodeJS, React, HTML and CSS
                    </div>
                </div>
            </footer>
            <footer className="basic-footer">
                2022 made by Mariana Pacheco Gaspar 
            </footer>
        </div>
        
    )
}

export default Footer;
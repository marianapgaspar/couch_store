import LoginLink from "../../Components/LoginLink";


function Signup(){
    return(
        <section className="login bg-dark">
        <div className="login-card ">
            <div className="login-logo"><i className="fa fa-spinner"></i> COUCH</div>
            <div className="login-title">Sign-up</div>
            <form className="login-form">
                <div className="form-control">
                    <input className="form-input w-14" placeholder="Insert an e-mail"/>
                </div>
                <div className="form-control">
                    <input className="form-input w-14" type="password" placeholder="Insert a password"/>
                </div>
            </form>
            <div className="login-button"><button className="btn-warning ">Sign-up</button></div>
            <LoginLink/>
        </div>
    </section>
    )
}
export default Signup;
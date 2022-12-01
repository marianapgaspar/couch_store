import LoginLink from "../../Components/LoginLink";

function Login(){
    return (
        <section className="login bg-dark">
        <div className="login-card ">
            <div className="login-logo"><i className="fa fa-spinner"></i> COUCH</div>
            <div className="login-title">Login</div>
            <form className="login-form">
                <div className="form-control">
                    <input className="form-input w-14" placeholder="E-mail"/>
                </div>
                <div className="form-control">
                    <input className="form-input w-14" type="password" placeholder="Password"/>
                </div>
            </form>
            <div className="login-button"><button className="btn-warning ">Login</button></div>
            <LoginLink/>
        </div>
    </section>
    )
}
export default Login;
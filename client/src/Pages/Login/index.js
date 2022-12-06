import LoginLink from "../../Components/LoginLink";


function Login(){
    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch("http://localhost:3001/authenticate", {
          method: "POST",
          body: JSON.stringify({name: e.target.email.value, password: e.target.password.password})
        }).then((response) => {
          return response.json(); // do something with response JSON
        });
    }
    return (
        <section className="login bg-dark">
        <div className="login-card ">
            <div className="login-logo"><i className="fa fa-spinner"></i> COUCH</div>
            <div className="login-title">Login</div>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <input className="form-input w-14" name="email" id="email" placeholder="E-mail"/>
                </div>
                <div className="form-control">
                    <input className="form-input w-14" name="password" id="password" type="password" placeholder="Password"/>
                </div>
                <div className="login-button"><button className="btn-warning ">Login</button></div>
                <LoginLink/>
            </form>
            
        </div>
    </section>
    )
}
export default Login;
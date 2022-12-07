import LoginLink from "../../Components/LoginLink";
import React from "react";


function Login(){
    const [data, setData] = React.useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        var data = {
            "name": e.target.email.value, "password": e.target.password.value
        }
        fetch("http://localhost:3001/authenticate", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((response) =>{
            response.json().then((data) => {
                if (data.message !== undefined){
                    sessionStorage.setItem('id', data.userId);
                    sessionStorage.setItem('name', data.userName);
                    window.location.href = "http://localhost:3000";
                }
                setData(data)
            });
        })
        
    }
    return (
        <section className="login bg-dark">
        <div className="login-card ">
            <div className="login-logo"><i className="fa fa-spinner"></i> COUCH</div>
            <div className="login-title">Login</div>
            <form className="login-form" onSubmit={handleSubmit}>
                {   data ? 
                    <div className="error-message">{data.error}</div>
                    : ""
                }
                <div className="form-control">
                    <input className="form-input w-14" name="email" id="email" placeholder="E-mail"/>
                </div>
                <div className="form-control">
                    <input className="form-input w-14" name="password" id="password" type="password" placeholder="Password"/>
                </div>
                    <div className="login-button">
                        <button className="btn-warning ">Login</button>
                        <LoginLink/>
                    </div>
            </form>
            
        </div>
    </section>
    )
}
export default Login;
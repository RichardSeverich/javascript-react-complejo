// React
import React from "react";
import { useHistory } from "react-router";
// Others
import Logo from "./../logo/Logo";
import useInput from "./../hooks/UseInput";
import handleLogin from "./HandleLogin";
import "./Login.css";

const Login = () => {

  const history = useHistory();
  const { value: valueUsername, bind: bindUsername, reset: resetUsername } = useInput("");
  const { value: valuePassword, bind: bindPassword, reset: resetPassword } = useInput("");

  const handleNavigate = () => {
    history.push("/nav-bar");
  }

  return (
    <div>
      <div className="Login-header">
        <Logo></Logo>
      </div>
      <div className="container col-md-3">
        <div className="card">
          <div className="card-header">
            <h3>Iniciar sesion</h3>
          </div>
          <div className="card-body">
            <form action="">
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control username"
                  minLength="3"
                  maxLength="10"
                  {...bindUsername}
                ></input>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  minLength="3" maxLength="10" 
                  {...bindPassword}>
                </input>
              </div>
              <div className="text-center">
                <button onClick={()=>handleLogin(
                  valueUsername,
                  valuePassword,
                  resetUsername,
                  resetPassword,
                  handleNavigate)}
                  type="button"
                  style={{ marginLeft: "24px" }} 
                  className="btn btn-info"
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

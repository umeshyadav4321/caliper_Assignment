import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {  useLocation, useNavigate } from "react-router-dom";
import { LOGIN_SUCCESS } from "../../Redux/AuthReducer/actionTypes";
import {login} from "../../Redux/AuthReducer/action"    
import styles from "../Login/Login.module.css"

const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const location=useLocation();
  const comingFrom=location.state?.from?.pathname||"/"
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email && password){
      dispatch(login({email,password})).then((r)=>{
        if(r.type===LOGIN_SUCCESS){
          // console.log(token);
          navigate("/Products");

        }

      });
    }

  }
  return (
    <div className={styles.maincontainer}>
      <h1>Login</h1>
      <form>
        <div>
          <label className={styles.label}>User Email</label>
          <br />
          <input className={styles.input}  type="email" placeholder='eve.holt@reqres.in' value={email} onChange={(e)=>setemail(e.target.value)} />
        </div>
        <div>
          <label className={styles.label}>User Password</label>
          <br />
          <input className={styles.input} type="password" placeholder='1234' value={password} onChange={(e)=>setpassword(e.target.value)} />
        </div>
        <button className={styles.button} onClick={handleSubmit}  type="submit" data-testid="login-submit">
          Login
        </button>
      </form>
    </div>
    
  );
};

export default Login;

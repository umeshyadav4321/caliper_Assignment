import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {  useLocation, useNavigate } from "react-router-dom";
import { LOGIN_SUCCESS } from "../../Redux/AuthReducer/actionTypes";
import {login} from "../../Redux/AuthReducer/action"    

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
          navigate(comingFrom,{replace:true});

        }

      });
    }

  }
  return (
    <div>
      <h2>LOGIN</h2>
      <form>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email" type="email" placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)} />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-testid="login-password" type="password" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} />
        </div>
        <button onClick={handleSubmit}  type="submit" data-testid="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;

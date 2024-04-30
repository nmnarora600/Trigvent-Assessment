import React, { useState } from "react";
import {  useNavigate} from "react-router-dom";

const Login = (props) => {

    const [credentials, setCredentials]=useState({email:"",password:""});
    const[show, setShow]=useState(false);
    let navigate=useNavigate();

    const host="http://localhost:3003"

    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    const handleOnSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
              
            },
            body:JSON.stringify({email:credentials.email, password:credentials.password})
          });
          const json=await response.json();
    
          if(json.success){
            //redirect and save authtoken
            localStorage.setItem('token',json.authToken)
            navigate("/")
            props.showAlert("Login Successful", "success");

          }
          else{
            props.showAlert("Invalid Credentials", "danger");
          }

          
            window.scrollTo({ top: 0, behavior: "smooth" });
        
    }
  return (
    <div className="container my-2 " style={{minHeight:'75vh'}}>
      <h2 className="text-center my-3">Login to continue </h2>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            value={credentials.email}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label ">
            Password
          </label>
          <div className="d-flex position-relative">
          <input
            type={`${show===true?"text":"password"}`}
            className="form-control col-8"
            id="password"
            value={credentials.password}
            onChange={onChange}
            name="password"
          />
          {show===true?<i className="fa-solid fa-eye-slash position-absolute right-0 top-0 bottom-0 d-flex justify-content-center align-items-center" style={{right:"6px",zIndex:"100"}} onMouseUp={()=>setShow(false)} onTouchEnd={()=>setShow(false)}></i>:<i className="fa-solid fa-eye position-absolute right-0 top-0 bottom-0 d-flex justify-content-center align-items-center" style={{right:"7px",zIndex:"100"}} onMouseDown={()=>setShow(true)} onTouchStart={()=>setShow(true)}></i>}
          </div>
          
        </div>
        
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;

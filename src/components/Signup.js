import React,{useState} from 'react'
import { useNavigate} from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials]=useState({name:"",email:"",password:""});
  const [cpwd, setCpwd]=useState("");

  const[show, setShow]=useState(false);
  const[cShow, setCShow]=useState(false);
    let navigate=useNavigate();

const host="http://localhost:3003"

    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    const onCPwdChange=(e)=>{
        setCpwd(e.target.value)
    }

    const handleOnSubmit=async(e)=>{
        e.preventDefault();
        if(cpwd!==credentials.password){
          props.showAlert("Invalid Credentials", "danger")
        }
        else{
          const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
              
            },
            body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password})
          });
          const json=await response.json();
          
          if(json.success){
            //redirect and save authtoken
            localStorage.setItem('token',json.authToken)
            navigate("/")
            props.showAlert("Account Created Successfully", "success");
          }
          else{
           props.showAlert("Invalid Credentials","danger");
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
               
    }
  return (
    <div style={{minHeight:'100vh'}}>
       <h2 className="text-center my-3"> Create an Account to Continue</h2>
        <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Full Name
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
            value={credentials.name}
            minLength={3}
            aria-describedby="emailHelp"
          />
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
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <div className="d-flex position-relative">
          <input
            type={`${show===true?"text":"password"}`}
            className="form-control"
            id="password"
            value={credentials.password}
            onChange={onChange}
            name="password"
            minLength={5}
          />
            {show===true?<i className="fa-solid fa-eye-slash position-absolute right-0 top-0 bottom-0 d-flex justify-content-center align-items-center" style={{right:"6px"}} onMouseUp={()=>setShow(false)} onTouchEnd={()=>setShow(false)}></i>:<i className="fa-solid fa-eye position-absolute right-0 top-0 bottom-0 d-flex justify-content-center align-items-center" style={{right:"7px"}} onMouseDown={()=>setShow(true)} onTouchStart={()=>setShow(true)}></i>}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="cPassword" className="form-label">
            Confirm Password
          </label>
          <div className="d-flex position-relative">
          <input
            type={`${cShow===true?"text":"password"}`}
            className="form-control"
            id="cpassword"
            value={cpwd}
            onChange={onCPwdChange}
            name="cpassword"
            minLength={5}
          />
           {cShow===true?<i className="fa-solid fa-eye-slash position-absolute right-0 top-0 bottom-0 d-flex justify-content-center align-items-center" style={{right:"6px"}} onMouseUp={()=>setCShow(false)} onTouchEnd={()=>setCShow(false)}></i>:<i className="fa-solid fa-eye position-absolute right-0 top-0 bottom-0 d-flex justify-content-center align-items-center" style={{right:"7px"}} onMouseDown={()=>setCShow(true)} onTouchStart={()=>setCShow(true)}></i>}
          </div>
        </div>
        <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="terms" required/>
    <label className="terms" htmlFor="terms" >I agree to all Terms and Conditions</label>
  </div>
        <button type="submit"  className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Signup

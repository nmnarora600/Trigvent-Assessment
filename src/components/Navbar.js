import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Navbar(props) {
  
 

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

const[isMenuOpen, setIsMenuOpen]=useState(false);
  const [userName, setUserName] = useState("");
  let navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("token");
    props.showAlert("Logged Out", "success");
    navigate("/login");
    handleScrollToTop();
  };

const closeMenu=()=>{
  setIsMenuOpen(false)
}
const toggleMenu=()=>{
  setIsMenuOpen(!isMenuOpen)
}

const host="http://localhost:3003"


const firstCap = (str) => {
  const word = str.trim(" ");
  let idx = word.indexOf(" ");
  if (idx !== -1) {
    let firstWord = word.substring(0, idx);
    return firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
};




var nameChange=localStorage.getItem("token");
useEffect(() => {
  
  let getUserName = async () => {
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
     
      
      response.ok ? setUserName(json.name) : setUserName("User");
      
    };
  if(localStorage.getItem("token")){
     getUserName();
  } 

  
  }, [nameChange]);


 


  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top bg-body-tertiary"
        data-bs-theme="dark"
        style={{marginBottom:0}}
      >
        <div className="container-fluid">
          <Link className={`navbar-brand  ${isMenuOpen?"d-flex justify-content-between col-12 align-items-center":""}  `} to="#">
            Trigvent Assessment
            <i className={`fa-solid fa-xmark text-white mx-3  ${isMenuOpen?"show":"collapse"}`} style={{color:'wheat'}} onClick={toggleMenu}></i>
          </Link>
          <button
            className={`navbar-toggler ${isMenuOpen?'collapse':""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen?"true":"false"}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          
          </button>
          <div className={`collapse navbar-collapse  ${isMenuOpen?"show mt-2 ":" "}`}id="navbarSupportedContent">
         



            {!localStorage.getItem("token") ? (
              <form className="d-flex col-12 justify-content-end" role="search">
                <Link
                  className="btn btn-primary mx-2"
                  to="/login"
                  role="button"
                  onClick={()=>{handleScrollToTop();closeMenu();}}
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary mx-2"
                  to="/signup"
                  role="button"
                  onClick={()=>{handleScrollToTop();closeMenu();}}
                >
                  SignUp
                </Link>
              </form>
            ) : (
              <form className={`${isMenuOpen?"":"col-12 justify-content-end"} d-flex `}>
                <div className={`${isMenuOpen?"w-100":""}`}>
                <h4 className={`navbar-brand container-fluid  text-light mt-1  mb-1  ${isMenuOpen?"mr-3":""}`}>{`Hello,  ${firstCap(userName)}`}</h4>
                </div>
                <button className="btn btn-primary" onClick={()=>{handleLogout();closeMenu();}}>
                  Logout
                </button>
              </form>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

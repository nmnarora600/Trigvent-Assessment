import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   
<footer className="bg-dark text-light py-3  bottom-0 w-100">
      <p className="text-center">
        Designed and Developed by{" "}
        <Link
          className="text-white"
          to={"https://namanarora.in"}
          target="_blank"
        >
          Naman Arora{" "}
        </Link>
      </p>
    </footer>
    
    
  );
};

export default Footer;

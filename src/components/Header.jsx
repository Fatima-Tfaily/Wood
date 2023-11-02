import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">The artist Hassan Chehaitly</div>
      <div className="menu">
        <a href="#">
          <Link to="/ArabeHome">Translate</Link>
        </a>
      </div>
    </div>
  );
};

export default Header;

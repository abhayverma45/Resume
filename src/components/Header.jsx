import React from "react";

import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header>
        <NavLink to="/">
          <h1 style={{ display: "inline" }}>HOME</h1>
        </NavLink>
        <Navbar />
      </header>
    </>
  );
};

export default Header;

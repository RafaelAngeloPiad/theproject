import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>ARTICLE-INATOR</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/Headlines">Headlines</NavLink>
          <NavLink to="/Everything">Find Articles</NavLink>
          <NavLink to="/About">About</NavLink>

          <NavBtn>
            <NavBtnLink to="/Headlines">Press</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

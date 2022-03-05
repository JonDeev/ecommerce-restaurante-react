import React from "react";
import { Nav, NavIcon, NavLink, Bars } from "./NavbarElements";

export const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>PIZA</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

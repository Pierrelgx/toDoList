import React from "react";
import { NavLink } from "react-router-dom";
import { Linky } from "./NavBar.styles";



export const NavBar = (): JSX.Element => {
    return (
      <>
      <nav>
      <Linky>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/details/edit/:id">Editer</NavLink>
      </Linky>
      </nav>

      </>
    );
    
  

};
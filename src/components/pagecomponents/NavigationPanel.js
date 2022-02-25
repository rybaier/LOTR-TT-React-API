import React from "react";
import { Card, Navbar, NavLink, } from "reactstrap";

const NavigationPanel = () => {
    return (
      <Card className="nav-panel">
        <Navbar color="green" dark light expand="md" >
          <NavLink className= 'links' href="/"> Home </NavLink>
          <NavLink className= 'links' href="/components/quotes"> Quiz</NavLink>
          <NavLink className= 'links' href="/components/characters"> Characters </NavLink>
          <NavLink className= 'links' href="/components/movies"> Movies </NavLink>
        </Navbar>
      </Card>
    )
}

export default NavigationPanel
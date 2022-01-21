import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Card, Navbar, NavLink, NavItem, Nav} from "reactstrap";

const NavigationPanel = () => {
    return (
    <Card className="nav-panel">
        <Navbar color="green" dark light expand="md" >
            {/* Wrap these in Links? to utilize react router dom*/}
                <NavLink className= 'links' href="/"> Home </NavLink>
                 <NavLink className= 'links' href="/components/Quotes"> Quotes </NavLink>
                 <NavLink className= 'links' href="/components/Characters"> Characters </NavLink>
                 <NavLink className= 'links' href="/components/Movies"> Movies </NavLink>
        </Navbar>
    </Card>
    )
}

export default NavigationPanel

     // <Card className="nav-panel">
        // //     <CardTitle tag = 'h4'>Navigation Panel</CardTitle>
        // //     <CardBody>Links to Stuff
        // //         <CardText>Home</CardText>
        // //         <CardText>Characters</CardText>
        // //         <CardText>Quotes</CardText>
        // //         {/* <CardText>Movies</CardText>
        // //         <CardText>Books</CardText> 
        // //     </CardBody>
        // </Card>
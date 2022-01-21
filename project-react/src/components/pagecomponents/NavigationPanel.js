import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Card, Navbar, NavLink, NavItem, Nav} from "reactstrap";

const NavigationPanel = () => {
    return (
    <Card className="nav-panel">
        <Navbar color="green" dark light expand="md" full>
            {/* Wrap these in Links? to utilize react router dom*/}
                <NavLink className= 'links' href="/components/Home"> Home </NavLink>
                <NavLink className= 'links' href="/components/Character"> Characters </NavLink>
                <NavLink className= 'links' href="/components/Quotes"> Quotes </NavLink>
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
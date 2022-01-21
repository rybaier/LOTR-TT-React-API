import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText} from "reactstrap";

const NavigationPanel = () => {
    return (
        <Card className="nav-panel">
            <CardTitle tag = 'h4'>Navigation Panel</CardTitle>
            <CardBody>Links to Stuff
                <CardText>Home</CardText>
                <CardText>Characters</CardText>
                <CardText>Quotes</CardText>
                {/* <CardText>Movies</CardText>
                <CardText>Books</CardText> */}
            </CardBody>
        </Card>
    )
}

export default NavigationPanel

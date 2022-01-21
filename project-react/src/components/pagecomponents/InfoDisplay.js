import React, {useState, useEffect} from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap"
import { Link } from "react-router-dom";

const InfoDisplay = () => {
    return (
        <Card className="info-display">
            <CardTitle tag={'h4'}>LOTR Information Type</CardTitle>
            <CardBody tag={'h6'}> Desired Informaion type name
                <CardText> information </CardText>
                <CardText> ternary for display wiki link if true, 
                            no display if false</CardText>
            </CardBody>
        </Card>
    )
}

export default InfoDisplay
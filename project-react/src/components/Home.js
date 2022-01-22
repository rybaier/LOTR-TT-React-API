import React, {useState, useEffect} from "react";
import { Container, Row, Col, Card, CardBody, CardText, CardTitle } from "reactstrap";
import {Routes, Route, Link} from 'react-router-dom';
import Header from "./pagecomponents/Header";
import NavigationPanel from "./pagecomponents/NavigationPanel";
import InfoDisplay from "./pagecomponents/InfoDisplay";
import RandomSearch from "./pagecomponents/RandomSearch";



const Home = () => {
    // Do I have seperate pages that display the information 
    // from each component API endpoint or do i have the links call
    // the component API url/endpoint and display info on home page?  

    return (
        <Container>
            <h1>Home</h1>
            <Header />
            <Row className="nav-and-display">
                    <NavigationPanel />
                    <RandomSearch />
            </Row>
            <Card className="info-display">
            <CardTitle tag={'h4'}>LOTR Home Information Type</CardTitle>
            <CardBody tag={'h6'}> Desired Informaion  name
                <CardText> information </CardText>
                <CardText> ternary for display wiki link if true, 
                            no display if false</CardText>
            </CardBody>
        </Card>
        </Container>    
    )
}

export default Home
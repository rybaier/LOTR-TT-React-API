import React, {useState, useEffect} from "react";
import { Container, Row, Col, Card, CardText } from "reactstrap";
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
                    <InfoDisplay />
            </Row>
          
        </Container>    
    )
}

export default Home
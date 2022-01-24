import React, { useState, useEffect } from "react" 
import { Container, Col, Card, CardTitle } from "reactstrap" 
import Header from "./pagecomponents/Header" 
import NavigationPanel from "./pagecomponents/NavigationPanel"  

const Home = () => {

    return (
      <div className="home-background">
        <Container>
        
          <Col className="nav-and-display">
            <Header />
            <NavigationPanel />
            <h2>Home</h2>
          </Col>

          <Card className="home-display">
            <CardTitle className="h7">A stop for random information about Lord of the Rings. </CardTitle>
            <CardTitle className="h7">Enjoy Your Toilet Time!</CardTitle>
          </Card>
        </Container>
      </div>    
    )
}

export default Home
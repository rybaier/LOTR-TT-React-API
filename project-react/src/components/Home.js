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
    //books component deleted Home component utilizes data for Books 

    const [bookData, setBookData] = useState()
  
  const authorizeSearch = {
    //This is the how the bearer token is used in an authorization header
        'Accept': 'application/json', //this defines how the data is accepted
        'Authorization' : `${process.env.REACT_APP_API_TOKEN}`
      }
  const URL = process.env.REACT_APP_URL
  //use multiple fetch calls in useEffect in app.js combine with corresponding state variables for endpoints 
//pass data down with props 
//multiple fetch calls within a single use effect creates endless loop that breaks api request limit then call stops
        //solved aboce by putting additional fetch calls in a .then of the original 
//having multiple useEffects with a single fetch call within is what is working 
 useEffect(()=> { 
    fetch(`${URL}book`, {
      headers: authorizeSearch
    })
    .then(res => res.json())
    .then(json => setBookData(json))    
    .catch(console.error)
  }, [])
  if (!bookData) {
      return <h6>Loading LOTR Data</h6>
  }

  //ApI fetch brins back single object with the key docs which holds the array as its value
  //use dot notation to access array data
 
  console.log(bookData)
 
    return (
        <div className="home-background">
        <Container>
            <h1>Home</h1>
            <Header />
            <Col className="nav-and-display">
                    <NavigationPanel />
                    <button onClick={()=> window.location.reload(false)}>
                        Randomize Information 
                    </button>
            </Col>
            <Card className="home-display">
            <CardTitle tag={'h4'}>LOTR Home Information Type</CardTitle>
            <CardBody tag={'h6'}> Desired Informaion  name
                <CardText> information </CardText>
                <CardText> ternary for display wiki link if true, 
                            no display if false</CardText>
            </CardBody>
        </Card>
        </Container>
        </div>    
    )
}

export default Home
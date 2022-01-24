import React, { useState, useEffect } from "react" 
import { Container, Col, Card, CardTitle } from "reactstrap" 
import Header from "./pagecomponents/Header" 
import NavigationPanel from "./pagecomponents/NavigationPanel"  

const Home = () => {
    // Do I have seperate pages that display the information 
    // from each component API endpoint or do i have the links call
    // the component API url/endpoint and display info on home page?  
    //books component deleted Home component utilizes data for Books 

    const [ bookData, setBookData ] = useState()
  
  const authorizeSearch = {
    //This is the how the bearer token is used in an authorization header
        'Accept': 'application/json', //this defines how the data is accepted
        'Authorization' : `${ process.env.REACT_APP_API_TOKEN }`
      }
  const URL = process.env.REACT_APP_URL
  //use multiple fetch calls in useEffect in app.js combine with corresponding state variables for endpoints 
//pass data down with props 
//multiple fetch calls within a single use effect creates endless loop that breaks api request limit then call stops
        //solved aboce by putting additional fetch calls in a .then of the original 
//having multiple useEffects with a single fetch call within is what is working 
 useEffect(()=> { 
    fetch(`${ URL }book`, {
      headers: authorizeSearch
    })
    .then(res => res.json())
    .then(json => setBookData(json))    
    .catch(console.error)
  }, [])
  if (!bookData) {
      return <p>Loading LOTR Data</p>
  }

  //ApI fetch brins back single object with the key docs which holds the array as its value
  //use dot notation to access array data
 
  console.log(bookData)
 
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
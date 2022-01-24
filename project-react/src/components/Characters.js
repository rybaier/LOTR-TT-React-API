import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card,CardBody, CardText, CardTitle, NavLink } from 'reactstrap'
import Header from './pagecomponents/Header'
import NavigationPanel from './pagecomponents/NavigationPanel'
import RandomSearch from './pagecomponents/RandomSearch'
import InfoDisplay from './pagecomponents/InfoDisplay'

const Characters =( {data} ) => {
    console.log(data)
    const [characterData, setCharacterData] = useState()
    const randomIndex = Math.floor(Math.random()* 933)
    console.log(randomIndex)
    //trying to use array.length consistently breaks code creating undefined properties 
      const URL = process.env.REACT_APP_URL
         const authorizeSearch = {
        //This is the how the bearer token is used in an authorization header
            'Accept': 'application/json', //this defines how the data is accepted
            'Authorization' : `${process.env.REACT_APP_API_TOKEN}`
          } 
  
     useEffect(()=> {
       
        fetch(`${URL}character`, {
          headers: authorizeSearch
        })
        .then(res => res.json())
        .then(json => setCharacterData(json))
      
        .catch(console.error)
     }, [])
     console.log(characterData)
     if (!characterData){
         return <h6> Loading Character Data</h6>
     }
     //how to put if statements regarding available api data to display??
     // need to add hyperlink to wiki link
    return (
        <main id='character-background'>
        <Container>
            <h1>Characters</h1>
            <Header />
            <Col className="nav-and-display">
                    <NavigationPanel />
                    <button onClick={()=> window.location.reload(false)}> 
                        Randomize Information 
                    </button>
            </Col>
            {console.log(characterData.docs[randomIndex])}

                    <Card className="characters-display">
                    <CardTitle tag={'h4'}>{characterData.docs[randomIndex].name}</CardTitle>
                    <CardTitle tag={'h6'}> Race: {characterData.docs[randomIndex].race}</CardTitle>
                        <CardText className='h7'> Gender: {characterData.docs[randomIndex].gender} </CardText>
                        <CardText className='h7'> Birth: {characterData.docs[randomIndex].birth}</CardText>
                        <NavLink className='h7' href = {characterData.docs[randomIndex].wikiUrl}> Wiki Link </NavLink>
                     </Card>
         
         
        </Container> 
        </main>
    )
}
export default Characters

// birth: "FA 316"
// death: ""
// gender: "Male"
// hair: ""
// height: ""
// name: "Beldir"
// race: "Human"
// realm: ""
// spouse: "Unnamed wife"
// wikiUrl: "http://lotr.wikia.com//wiki/Beldir"
// _id: "5cd99d4bde30eff6ebccfc23"
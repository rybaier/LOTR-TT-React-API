import React, { useState, useEffect } from 'react'
import { Container,  Col, Card, CardText, CardTitle } from 'reactstrap'
import Header from './pagecomponents/Header'
import NavigationPanel from './pagecomponents/NavigationPanel'

const Characters =(  ) => {
    const [ characterData, setCharacterData ] = useState()
    const randomIndex = Math.floor(Math.random()* 933)
    const URL = process.env.REACT_APP_URL
    const authorizeSearch = {
        'Accept': 'application/json', 
        'Authorization' : `${ process.env.REACT_APP_API_TOKEN }`
      } 
  
    useEffect(()=> {
        fetch(`${ URL }character`, {
          headers: authorizeSearch
        })
        .then(res => res.json())
        .then(json => setCharacterData(json))
        
        .catch(console.error)
     }, [])

     if (!characterData){
         return <p> Loading Character Data</p>
     }
 
    return (
      <main id='character-background'>
        <Container>
            
          <Col className="nav-and-display">
            <Header />
            <NavigationPanel />
            <button onClick={ ()=> window.location.reload(false) }> Next Character</button>
            <h2>Characters</h2>
          </Col>

          <Card className="characters-display">
            <CardTitle className='h7'>Name: {characterData.docs[ randomIndex ].name}</CardTitle>
            <CardTitle className='h7'> Race: {characterData.docs[ randomIndex ].race}</CardTitle>
            <CardText className='h7'> Gender: {characterData.docs[ randomIndex ].gender} </CardText>
            <CardText className='h7'> Birth: {characterData.docs[ randomIndex ].birth}</CardText>
            <a className='h7' href = { characterData.docs[ randomIndex ].wikiUrl } target={ '_blank' } rel="noreferrer"> Wiki Link </a>
          </Card>
 
        </Container> 
      </main>
    )
}
export default Characters
import React, { useState, useEffect } from 'react'
import { Container, Col, Card,  CardTitle } from 'reactstrap'
import Header from './pagecomponents/Header'
import NavigationPanel from './pagecomponents/NavigationPanel'
import Quiz from './Quiz'

const Quotes =() => {

    const [ quotesData, setQuotesData ] = useState()
    const randomIndex = Math.floor(Math.random()* 1000)
    console.log(randomIndex)
  
    const URL = process.env.REACT_APP_URL
         const authorizeSearch = {
            'Accept': 'application/json', 
            'Authorization' : `${ process.env.REACT_APP_API_TOKEN }`
          } 
     
     useEffect(()=> {
        fetch(`${ URL }quote`, { headers: authorizeSearch })
        .then(res => res.json())
        .then(json => setQuotesData(json))
        .catch(console.error)
    
     }, [])

     console.log(quotesData)
     
     if (!quotesData){
         return <p> Loading Quote Data</p>
     }

    return (
      <main className='quotes-background' >
        <Container>
            
          <Col className="nav-and-display">
            <Header />
            <NavigationPanel />
            <h2>Quotes</h2>
          </Col>

          {console.log(quotesData.docs[ randomIndex ])}
          
          <Card className="quote-display">
            <button onClick={ ()=> window.location.reload(false) }> Next Quote </button>

            <CardTitle className='h7'>“ { quotesData.docs[ randomIndex ].dialog } ”</CardTitle>
          </Card>
          <Quiz randomQuote={ quotesData.docs[ randomIndex ] }/>
        </Container> 
      </main>
    )
} 
export default Quotes

import React, { useState, useEffect } from 'react'
import { Container, Col, Card,  CardTitle } from 'reactstrap'
import Header from './pagecomponents/Header'
import NavigationPanel from './pagecomponents/NavigationPanel'
import Quiz from './Quiz'

const Quotes =() => {
   
// insert loading state boolean here with useState wrapping loading in curly with &&
    // const [ loading, setLoading ] =useState(false)
    const [ quotesData, setQuotesData ] = useState()
    // const [ characterData, setCharacterData ] = useState()
    // const [ randomQuote, setRandomQuote ] = useState()
    const randomIndex = Math.floor(Math.random()* 1000)
    console.log(randomIndex)
    //trying to use array.length consistently breaks code creating undefined properties 
      const URL = process.env.REACT_APP_URL
         const authorizeSearch = {
        //This is the how the bearer token is used in an authorization header
            'Accept': 'application/json', //this defines how the data is accepted
            'Authorization' : `${ process.env.REACT_APP_API_TOKEN }`
          } 
  
        //  make a who said it version for the quotes
         //How am i going to get the characters name out of the character data array by matching id
         // use async function to delay render until second api call made from 
     
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

     //how to put if statements regarding available api data to display??
    return (
      <main className='quotes-background' >
        <Container>
            
          <Col className="nav-and-display">
            <Header />
            <NavigationPanel />
            <button onClick={ ()=> window.location.reload(false) }> Next Quote </button>
            <h2>Quotes</h2>
          </Col>

          {console.log(quotesData.docs[ randomIndex ])}
          
          <Card className="quote-display">
            <CardTitle className='h7'>" {quotesData.docs[ randomIndex ].dialog}"</CardTitle>
            {/* <CardTitle tag={'h6'}> name {quotesData.docs[randomIndex].character}</CardTitle> */}
            {/* <CardText className='h7'> {movieName} </CardText> */}
          </Card>
          <Quiz randomQuote={ quotesData.docs[ randomIndex ] }/>
        </Container> 
      </main>
    )
} 
export default Quotes
// having all 3 data sets in quotes causes to multiple renders which shows a text cycle 
// how do i feel about this side effect as a visulaization of the app??
// character: "5cd99d4bde30eff6ebccfca1"
// dialog: "    You may triumph in the field of battle for a day, but against the power that     has risen in the east, there is no victory!  "
// movie: "5cd95395de30eff6ebccde5d"rets
// _id: "5cd96e05de30eff6ebcce8b6"
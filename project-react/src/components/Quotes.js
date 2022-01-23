import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, CardText, CardTitle } from 'reactstrap'
import Header from './pagecomponents/Header'
import NavigationPanel from './pagecomponents/NavigationPanel'
import RandomSearch from './pagecomponents/RandomSearch'
import InfoDisplay from './pagecomponents/InfoDisplay'

const Quotes =({ data }) => {
    console.log(data)

    const [quotesData, setQuotesData] = useState()

    const randomIndex = Math.floor(Math.random()* 1000)
    console.log(randomIndex)
    //trying to use array.length consistently breaks code creating undefined properties 
      const URL = process.env.REACT_APP_URL
         const authorizeSearch = {
        //This is the how the bearer token is used in an authorization header
            'Accept': 'application/json', //this defines how the data is accepted
            'Authorization' : `${process.env.REACT_APP_API_TOKEN}`
          } 
  
     useEffect(()=> {
       
        fetch(`${URL}quote`, {
          headers: authorizeSearch
        })
        .then(res => res.json())
        .then(json => setQuotesData(json))
      
        .catch(console.error)
     }, [])
     console.log(quotesData)
     if (!quotesData){
         return <h6> Loading Quote Data</h6>
     }
     //how to put if statements regarding available api data to display??
    return (
        <Container>
            <h1>Quotes</h1>
            <Header />
            <Row className="nav-and-display">
                    <NavigationPanel />
                    <RandomSearch />
            </Row>
            {console.log(quotesData.docs[randomIndex])}

                    <Card className="quote-display">
                    <CardTitle tag={'h4'}>{quotesData.docs[randomIndex].dialog}</CardTitle>
                    <CardTitle tag={'h6'}> Matching Character Name Goes Here </CardTitle>
                        <CardText className='h7'> Matching Movie Name Goes Here </CardText>
                     </Card>
         
         
        </Container> 
    )
} 
export default Quotes

// character: "5cd99d4bde30eff6ebccfca1"
// dialog: "    You may triumph in the field of battle for a day, but against the power that     has risen in the east, there is no victory!  "
// movie: "5cd95395de30eff6ebccde5d"
// _id: "5cd96e05de30eff6ebcce8b6"
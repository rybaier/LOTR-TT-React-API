import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, CardText, CardTitle } from 'reactstrap'
import Header from './pagecomponents/Header'
import NavigationPanel from './pagecomponents/NavigationPanel'
import RandomSearch from './pagecomponents/RandomSearch'
import InfoDisplay from './pagecomponents/InfoDisplay'

const Movies =({data}) => {
 console.log(data)
    const [movieData, setMovieData] = useState(data)
    const [movieInfo, setMovieInfo] =useState()

    // setMovieInfo( Math.floor(Math.random()* movieData.docs.length))
    console.log(movieInfo)
   
    const authorizeSearch = {
        //This is the how the bearer token is used in an authorization header
            'Accept': 'application/json', //this defines how the data is accepted
            'Authorization' : `${process.env.REACT_APP_API_TOKEN}`
          }
      const URL = process.env.REACT_APP_URL
  
    //  useEffect(()=> { 
    //     fetch(`${URL}movie`, {
    //       headers: authorizeSearch
    //     })
    //     .then(res => res.json())
    //     .then(json => setMovieData(json))
    //     .catch(console.error)
    //  }, [])
    //  console.log(movieData.docs)
     
    return (
        <Container>
            <h1>Movies</h1>
            <Header />
            <Row className="nav-and-display">
                    <NavigationPanel />
                    <RandomSearch />
            </Row>
            {/* {(movieData.docs || []).map(movie =>{
                return(
                    <Card className="info-display">
                    <CardTitle tag={'h4'}>{movie.name}</CardTitle>
                    <CardTitle tag={'h6'}> Rotten Tomatoes Score: {movie.rottenTomatoesScore}%</CardTitle>
                        <CardText className='h7'> Run Time: {movie.runtimeInMinutes} </CardText>
                        <CardText className='h7'> Academy Award Nominations: {movie.academyAwardNominations}</CardText>
                        <CardText className='h7'> Academy Award Wins: {movie.academyAwardWins}</CardText>
                     </Card>
                )
            })} */}
         
        </Container>
    )
}
export default Movies

import React, { useState, useEffect } from 'react'
import { Container, Col, Card, CardText, CardTitle } from 'reactstrap'
import Header from './pagecomponents/Header'
import NavigationPanel from './pagecomponents/NavigationPanel'

const Movies =() => {

    const [ movieData, setMovieData ] = useState()
    const randomIndex = Math.floor(Math.random()* 8)
      const URL = process.env.REACT_APP_URL
         const authorizeSearch = {
            'Accept': 'application/json', 
            'Authorization' : `${ process.env.REACT_APP_API_TOKEN }`
          } 

     useEffect(()=> {
        fetch(`${ URL }movie`, {
          headers: authorizeSearch
        })
        .then(res => res.json())
        .then(json => setMovieData(json))
        .catch(console.error)
     }, [])
     if (!movieData){
         return <p> Loading Movie Data</p>
     }
     
    return (
      <main id='movie-background'>
        <Container>
          <Col className="nav-and-display">
            <Header />
            <NavigationPanel />
            <h2>Movies</h2>
            {movieData.docs.map(movie => {
                return(
                  <Card className="movies-display">
                    <CardTitle className='h8'><strong><u>{movie.name}</u></strong></CardTitle>
                    <CardTitle className='h7'> Rotten Tomatoes Score: {movie.rottenTomatoesScore}%</CardTitle>
                    <CardText className='h7'> Run Time: {movie.runtimeInMinutes} </CardText>
                    <CardText className='h7'> Academy Award Nominations: {movie.academyAwardNominations}</CardText>
                    <CardText className='h7'> Academy Award Wins: {movie.academyAwardWins}</CardText>
                  </Card>
        
                )
            })} 
          </Col>
        </Container> 
      </main>
    )
}
export default Movies
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, CardText, CardTitle } from 'reactstrap'
import Header from './pagecomponents/Header'
import NavigationPanel from './pagecomponents/NavigationPanel'
import RandomSearch from './pagecomponents/RandomSearch'
import InfoDisplay from './pagecomponents/InfoDisplay'

const Movies =() => {

    const [movieData, setMovieData] = useState()
    const [movieInfo, setMovieInfo] =useState(null)

    const randomIndex = Math.floor(Math.random()* 8)
    console.log(randomIndex)
    //trying to use array.length consistently breaks code creating undefined properties 
      const URL = process.env.REACT_APP_URL
         const authorizeSearch = {
        //This is the how the bearer token is used in an authorization header
            'Accept': 'application/json', //this defines how the data is accepted
            'Authorization' : `${process.env.REACT_APP_API_TOKEN}`
          } 
  
     useEffect(()=> {
       
        fetch(`${URL}movie`, {
          headers: authorizeSearch
        })
        .then(res => res.json())
        .then(json => setMovieData(json))
      
        .catch(console.error)
     }, [])
     console.log(movieData)
     if (!movieData){
         return <h6> Loading Movie Data</h6>
     }
     
    return (
        <Container>
            <h1>Movies</h1>
            <Header />
            <Row className="nav-and-display">
                    <NavigationPanel />
                    <RandomSearch />
            </Row>
            {console.log(movieData.docs[randomIndex])}

                    <Card className="info-display">
                    <CardTitle tag={'h4'}>{movieData.docs[randomIndex].name}</CardTitle>
                    <CardTitle tag={'h6'}> Rotten Tomatoes Score: {movieData.docs[randomIndex].rottenTomatoesScore}%</CardTitle>
                        <CardText className='h7'> Run Time: {movieData.docs[randomIndex].runtimeInMinutes} </CardText>
                        <CardText className='h7'> Academy Award Nominations: {movieData.docs[randomIndex].academyAwardNominations}</CardText>
                        <CardText className='h7'> Academy Award Wins: {movieData.docs[randomIndex].academyAwardWins}</CardText>
                     </Card>
            {/* the following code displays all data of array the above data gives random index data
            {movieData.docs.map(movie =>{
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

// perhaps a button that calls for all the movie data to be displayed instead of the random one 
// async function worked well but didn't add any obvious benefit to the use catch as the solution to my multiple renders
//was having a loading conditional statement while the api data was being gathered 
// const fetchMovies = async () => {

//     await fetch(`${URL}movie`, {
//       headers: authorizeSearch
//     })
//     .then(res => res.json())
//     .then(json => setMovieData(json))
//     .catch(console.error)
// }
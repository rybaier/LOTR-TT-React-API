import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';
import {Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Characters from './components/Characters'
import Movies from './components/Movies'
import Quotes from './components/Quotes'
 
function App() {
  const [movieData, setMovieData] =useState([])
  //this takes movie data
  const [quotesData, setQuotesData] = useState([])
  // this takes quotes movie data
  const [characterData, setCharacterData] = useState([])
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
    fetch(`${URL}movie`, {
      headers: authorizeSearch
    })
    .then(res => res.json())
    .then(json => setMovieData(json))
  
    .then(fetch(`${URL}quote`, {
      headers: authorizeSearch
    })
    .then(res => res.json())
    .then(json => setQuotesData(json)))
    
    .then(fetch(`${URL}character`, {
      headers: authorizeSearch
    })
    .then(res => res.json())
    .then(json => setCharacterData(json)))
    
    .catch(console.error)
  }, [])

  //ApI fetch brins back single object with the key docs which holds the array as its value
  //use dot notation to access array data
  console.log(movieData.docs)
  console.log(quotesData.docs)
  console.log(characterData.docs)
  //Why does only Quotes link work all three nav links are typed exactly the same 
  
  
    return (
      <div>
       <Container>
        <h1>Hello Middle Earth</h1>
            <Routes>
                  <Route path= '/' element={<Home />} />
                  <Route path= '/components/Characters' element={<Characters data={characterData}/>} />
                  <Route path= '/components/Movies' element={<Movies data={movieData} />} />
                  <Route path= '/components/Quotes' element={<Quotes data={quotesData} />} />
             </Routes>
        </Container>
          </div>
    );
  }

export default App;

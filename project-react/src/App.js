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
  const authorizeSearch = {
    //This is the how the bearer token is used in an authorization header
        'Accept': 'application/json',
        'Authorization' : `${process.env.REACT_APP_API_TOKEN}`
      }
  const URL = process.env.REACT_APP_URL
  useEffect(()=> {
  //use multiple fetch calls in useEffect in app.js combine with corresponding state variables for endpoints 
//pass data down with props 
    fetch(`${URL}movie`, {
      headers: authorizeSearch
    })
    .then(res => res.json())
    .then(json => setMovieData(json))
    .catch(console.error)

    // fetch(`${URL}quote`, {
    //   headers: authorizeSearch
    // })
    // .then(res => res.json())
    // .then(json => setQuotesData(json))
    // .catch(console.error)
  }, [])

  
console.log(movieData.docs)
console.log(quotesData.docs)
//Why does only Quotes link work all three nav links are typed exactly the same 


  return (
    <div>
     <Container>
      <h1>Hello Middle Earth</h1>
          <Routes>
                <Route path= '/' element={<Home />} />
                <Route path= '/components/Characters' element={<Characters/>} />
                <Route path= '/components/Movies' element={<Movies data = {movieData}/>} />
                <Route path= '/components/Quotes' element={<Quotes data = {quotesData} />} />
           </Routes>
      </Container>
        </div>
  );
}

export default App;

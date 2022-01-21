import React, {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';
import {Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Characters from './components/Characters'
import Movies from './components/Movies'
import Quotes from './components/Quotes'
 
function App() {
// const URL = process.env.REACT_APP_URL
//   useEffect(()=> {
//     const authorizeSearch = {
//       'Accept': 'application/json',
//       'Authorization' : `${process.env.REACT_APP_API_TOKEN}`
//     }
//     const searchCall = fetch()
//   }, [])

//Why does only Quotes link work all three nav links are typed exactly the same 
  return (
    <div>
     <Container>
      <h1>Hello Middle Earth</h1>
          <Routes>
                <Route path= '/' element={<Home />} />
                <Route path= '/components/Characters' element={<Characters/>} />
                <Route path= '/components/Movies' element={<Movies/>} />
                <Route path= '/components/Quotes' element={<Quotes/>} />
           </Routes>
      </Container>
        </div>
  );
}

export default App;

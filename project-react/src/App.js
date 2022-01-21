import React, {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home'
import { Container } from 'reactstrap';
import {Route, Routes } from 'react-router-dom'

 
function App() {
// const URL = process.env.REACT_APP_URL
//   useEffect(()=> {
//     const authorizeSearch = {
//       'Accept': 'application/json',
//       'Authorization' : `${process.env.REACT_APP_API_TOKEN}`
//     }
//     const searchCall = fetch()
//   }, [])

  return (
    <Container>
      <h1>Hello Middle Earth</h1>
      <Home />

  
    </Container>
  );
}

export default App;

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'reactstrap'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Characters from './components/Characters'
import Movies from './components/Movies'
import Quotes from './components/Quotes'

function App() {
    return (
      <div id='main-background'>
        <Container>
          <Routes>
            <Route path= '/' element={ <Home /> } />
            <Route path= '/components/characters' element={ <Characters /> } />
            <Route path= '/components/movies' element={ <Movies /> } />
            <Route path= '/components/quotes' element={ <Quotes  /> } />
          </Routes>
        </Container>
      </div>
    )
  }

export default App

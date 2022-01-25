import React, { useState, useEffect } from "react";
import { Row, Container, Card, } from "reactstrap";

const Quiz = ({ randomQuote }) => {
    console.log(randomQuote.character)
    const [ wrongCharacters, setWrongCharacters ] = useState()
    const [ rightCharacter, setRightCharacter ] = useState()
    const randomIndex1 = Math.floor(Math.random()* 333)
    const randomIndex2 = Math.floor(Math.random()* 633)
    const randomIndex3 = Math.floor(Math.random()* 933)
    console.log(wrongCharacters.docs[ randomIndex1 ])
    console.log(wrongCharacters.docs[ randomIndex2 ])
    console.log(wrongCharacters.docs[ randomIndex3 ])
    const URL = process.env.REACT_APP_URL
    const authorizeSearch = {
        'Accept': 'application/json', 
        'Authorization' : `${ process.env.REACT_APP_API_TOKEN }`
      } 
    const characterURL = `${ URL }character?_id=${ randomQuote.character }`
    console.log(characterURL)
    useEffect(()=> {
        fetch(`${ URL }character`, {
          headers: authorizeSearch
        })
        .then(res => res.json())
        .then(json => setWrongCharacters(json))
        .then(fetch(characterURL,  {
            headers: authorizeSearch
          } )
             .then(res=>res.json())
             .then(json => setRightCharacter(json)))

        .catch(console.error)
     }, [])
    console.log(wrongCharacters)
    console.log(rightCharacter)
    if(!wrongCharacters) {
        return (
          <p> ...Loading Answers...</p>
        )
    }

    return(
      <h1> test</h1>
    )
}
export default Quiz
//use !not statement for loading quiz answers 
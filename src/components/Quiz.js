import React, { useState, useEffect } from "react";
import { Row, Container, Card, } from "reactstrap";

const Quiz = ({ randomQuote }) => {
    console.log(randomQuote.character)
    // const [ isLoading, setIsLoading ] = useState(false)
    // console.log(isLoading)
    const [ wrongCharacters, setWrongCharacters ] = useState(null)
    const [ rightCharacter, setRightCharacter ] = useState(null)
    const randomIndex1 = Math.floor(Math.random()* 333)
    const randomIndex2 = Math.floor(Math.random()* 633)
    const randomIndex3 = Math.floor(Math.random()* 933)
    console.log(randomIndex1)
    console.log(randomIndex2)
    console.log(randomIndex3)
    const URL = process.env.REACT_APP_URL
    const authorizeSearch = {
        'Accept': 'application/json', 
        'Authorization' : `${ process.env.REACT_APP_API_TOKEN }`
      } 
    const characterURL = `${ URL }character?_id=${ randomQuote.character }`
    console.log(characterURL)
    const answerQuiz = (e) => {
        e.preventDefault()
        if (e.target === rightCharacter.docs[ 0 ].name) 
        return <h3> Correct! Click the next quote button to continue.</h3>
        if (e.target !== rightCharacter.docs[ 0 ].name) 
        return <h3> Wrong the correct answer is { rightCharacter.docs[ 0 ].name } Click the next quote button to continue. </h3>
    }
    // async function getData() {
  
    //    await fetch(`${ URL }character`, {
    //         headers: authorizeSearch
    //       })
    //       .then(res => res.json())
    //       .then(json => setWrongCharacters(json))
    //       .then()
    //       .then(fetch(characterURL,  {
    //           headers: authorizeSearch
    //         } )
    //            .then(res=>res.json())
    //            .then(json => setRightCharacter(json)))
  
    //       .catch(console.error)   
    //     console.log(wrongCharacters)
    //     console.log(rightCharacter)
    // }
    useEffect(()=> { 
      fetch(characterURL,  {
        headers: authorizeSearch
      } )
         .then(res=>res.json())
         .then(json => setRightCharacter(json))
         .then(fetch(`${ URL }character`, {
          headers: authorizeSearch
        })
        .then(res => res.json())
        .then(json => setWrongCharacters(json)))
        .catch(console.error)
     }, [])
     
        console.log(wrongCharacters)
    //     console.log(rightCharacter) 
        if(wrongCharacters === null || rightCharacter === null) {
        return (
          <p> ...Loading Answers...</p>
        )
    }
    return(
      <div id='quiz'>
        <h3 id="quiz-text">“ Who Said It??? ”</h3>
        <div className="quiz-answers">
          <button >{ rightCharacter.docs[ 0 ].name } </button>
          <button > { wrongCharacters.docs[ randomIndex3 ].name } </button>
          <button >{ wrongCharacters.docs[ randomIndex2 ].name }</button>
          <button >{ wrongCharacters.docs[ randomIndex1 ].name }</button>
        </div>
      </div>  
    )
}
export default Quiz
//use !not statement for loading quiz answers 
//runnning into rendering issues again for quiz components
// finally got it the simplest solution was includding an or (||) statement
// with the other state variable to prevent the screen from loading until both 
// calls had been made.
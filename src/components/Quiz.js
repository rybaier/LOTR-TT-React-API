import React, { useState, useEffect } from "react";
import QuizAnswers from './QuizAnswers'

const Quiz = ({ randomQuote }) => {
    console.log(randomQuote.character)
 
    const [ wrongCharacters, setWrongCharacters ] = useState(null)
    const [ rightCharacter, setRightCharacter ] = useState(null)
    const [ quizDisplayText, setQuizDisplayText ] = useState('Who Said It???')
    console.log(quizDisplayText)
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
        setQuizDisplayText('Correct! Click the next quote button to continue.')
    }
    const answerQuizWrong = (e) => {
      e.preventDefault()
        setQuizDisplayText(`Wrong the correct answer is -${ rightCharacter.docs[ 0 ].name }- Click the next quote button to continue. `)   
    }

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
        if(wrongCharacters === null || rightCharacter === null) {
        return (
          <p> ...Loading Answers...</p>
        )
    }
  
    return(
      <div id='quiz'>
        <h3 id='quiz-text'>“ { quizDisplayText } ”</h3>
        <div className='quiz-answers'>
          <QuizAnswers right = { rightCharacter.docs[ 0 ].name } wrong1 = { wrongCharacters.docs[ randomIndex1 ].name } 
          wrong2 = { wrongCharacters.docs[ randomIndex2 ].name } wrong3 = { wrongCharacters.docs[ randomIndex3 ].name } 
          answerQuiz = { answerQuiz } answerQuizWrong = { answerQuizWrong } />
        </div>
      </div>  
    )
}
export default Quiz

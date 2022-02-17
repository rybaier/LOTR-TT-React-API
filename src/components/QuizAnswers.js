import React, { useState, useEffect } from 'react'

const QuizAnswers = ({ right, wrong1, wrong2, wrong3, answerQuiz, answerQuizWrong }) => {
    console.log(right, wrong1, wrong2, wrong3 )
    const answers = [ right, wrong1, wrong2, wrong3 ] 
    
    const shuffle = answers.map(answer => ({ answer, sort: Math.random() })).sort((a,b) => a.sort - b.sort).map(({ answer }) => answer)
    
    console.log(shuffle)
  
    const rightOrWrong = (e) => {
     console.log('works', e)
     
        if (e.target.innerText === right) {
            return (
                answerQuiz()
                )}
        if (e.target.innerText !== right){
          console.log("Guessed wrong");
          return answerQuizWrong()
        } 
        //try using && logical operator in main body to reference different 
        //try ternary statemen for different answers
        
    }
    return (
      <div>
        <h3>Test</h3>
        <button onClick={ (e) => rightOrWrong(e)  }>{ right } </button> 
        <button onClick={ (e) => rightOrWrong(e) }> { wrong1 } </button>
        <button onClick={ (e) => rightOrWrong(e) }>{ wrong2 }</button>
        <button onClick={ (e) => rightOrWrong(e) }>{ wrong3 }</button>  
      </div> 
    )
}
export default QuizAnswers
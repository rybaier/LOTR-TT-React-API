import React, { useState, useEffect } from 'react'

const QuizAnswers = ({ right, wrong1, wrong2, wrong3, answerQuiz, answerQuizWrong }) => {
    console.log(right, wrong1, wrong2, wrong3 )
    const answers = [ right, wrong1, wrong2, wrong3 ] 
    
    //discovered codeblock based on Schwartzian transform see commit for ref link 
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
        <button onClick={ (e) => rightOrWrong(e)  }>{ shuffle[ 0 ] } </button> 
        <button onClick={ (e) => rightOrWrong(e) }> { shuffle[ 1 ] } </button>
        <button onClick={ (e) => rightOrWrong(e) }>{ shuffle[ 2 ] }</button>
        <button onClick={ (e) => rightOrWrong(e) }>{ shuffle[ 3 ] }</button>  
      </div> 
    )
}
export default QuizAnswers 
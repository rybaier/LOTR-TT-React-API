import React, { useState, useEffect } from 'react'

const QuizAnswers = ({ right, wrong1, wrong2, wrong3, answerQuiz, answerQuizWrong }) => {
    console.log(right, wrong1, wrong2, wrong3 )
    const answers = [ right, wrong1, wrong2, wrong3 ] 
    const rightOrWrong = (e ) => {
     console.log('works')
     console.log ()
        if (e.target.innerHTML === right) {
            return (
                answerQuiz
                )}
        // if (e.target !== right) return answerQuizWrong
    }
    console.log(answers)
    return (
      <div>
        <h3>Test</h3>
        <button onClick={ (e) => { e.target.innerHTML === right ? console.log('1'): console.log('2')} }>{ right } </button> 
        <button onClick={ rightOrWrong }> { wrong1 } </button>
        <button onClick={ rightOrWrong }>{ wrong2 }</button>
        <button onClick={ rightOrWrong }>{ wrong3 }</button>  
      </div> 
    )
}
export default QuizAnswers
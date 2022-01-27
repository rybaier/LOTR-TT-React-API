import React, { useState, useEffect } from 'react'

const QuizAnswers = ({ right, wrong1, wrong2, wrong3, answerQuiz, answerQuizWrong }) => {
    console.log(right, wrong1, wrong2, wrong3 )
    const answers = [ right, wrong1, wrong2, wrong3 ] 
    const rightOrWrong = (e) => {
        if (e === right) return answerQuiz
        if (e !== right) return answerQuizWrong
    }
    console.log(answers)
    return (
      <div>
        <h3>Test</h3>
        <button onClick={ answerQuiz }>{ right } </button> 
        <button onClick={ answerQuizWrong }> { wrong1 } </button>
        <button onClick={ answerQuizWrong }>{ wrong2 }</button>
        <button onClick={ answerQuizWrong }>{ wrong3 }</button>  
      </div> 
    )
}
export default QuizAnswers
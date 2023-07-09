import './App.css'
import { Result } from './components/result'
import { Question } from './components/question'
import { questions } from './model/model'
import { useState } from 'react'

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [correct, setCorrectNum] = useState(0)

  function isQuizInProgress() {
    return currentQuestion < questions.length
  }

  function onAnswer(isCorrect: boolean) {
    setCurrentQuestion(currentQuestion + 1)
    if (isCorrect) {
      setCorrectNum(correct + 1)
    }
  }

  function onRestart() {
    setCurrentQuestion(0)
    setCorrectNum(0)
  }

  const f = true

  return (
    <div>{
      isQuizInProgress() ? <Question question={questions[currentQuestion]} onAnswer={(f) =>onAnswer(f)}/> : <Result correct={correct} total={questions.length} onRestart={onRestart}/>
    }</div>
  )
}
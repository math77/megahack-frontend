import { useEffect, useState } from "react";

import QuestionForm from '../components/QuestionForm'
import '../styles/pages/questions.css'

function Questions() {

  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [question, setQuestion] = useState('')

  useEffect(() => {
    //first question setQuestion
    setQuestion('question')
  }, [])

  function next(value) {
    //api
    //setQuestion
    setTimeout(() => {
      setQuestion('question2')
      setCurrentQuestion(prev => prev + 1)

    }, [1000])
    //current question + 1
  }

  return (
    <div className="questions-page">
        <QuestionForm next={next} question={question} current={currentQuestion} />
    </div>
  );
}

export default Questions

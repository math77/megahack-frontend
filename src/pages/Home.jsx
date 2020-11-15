import { useHistory } from 'react-router-dom'
import QuestionForm from '../components/QuestionForm'

import '../styles/pages/home.css'

export default function Home() {
  const history = useHistory()

  function next() {
    //api
    //redirect page route
    history.push('/questions') // or reddiret to page options
  }

  return (
    <div className="home-page">
      <QuestionForm next={next} question="Como podemos te ajudar hoje?" />
    </div>
  )
}
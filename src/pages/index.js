import * as React from "react"

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, ListGroup } from "react-bootstrap";
import './index.css'

const containerStyles = {
  with: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const cardStyle = {
  width: 600,
  height: 300,
}


// markup
const IndexPage = () => {
  const [questions, setQuestions] = React.useState([{
    question: 'Pergunta 1?',
    answers: [
      'Opção 1',
      'Opção 2',
      'Opção 3',
    ],
    correctAnswer: 'Opção 2'
  },
  {
    question: 'Pergunta 2?',
    answers: [
      'Opção 1',
      'Opção 2',
      'Opção 3',
    ],
    correctAnswer: 'Opção 3'
  },
  {
    question: 'Pergunta 3?',
    answers: [
      'Opção 1',
      'Opção 2',
      'Opção 3',
    ],
    correctAnswer: 'Opção 1'
  },
  {
    question: 'Pergunta 4?',
    answers: [
      'Opção 1',
      'Opção 2',
      'Opção 3',
    ],
    correctAnswer: 'Opção 2'
  }])
  const [correctAnswer, setCorrectAnswer] = React.useState(0)
  const [clickAnswer, setClickAnswer] = React.useState('')
  const [step, setStep] = React.useState(0)

  const checkAnswer = (answer) => {
    if (answer === questions[step].correctAnswer) {
      setCorrectAnswer(questions[step].correctAnswer)
      setClickAnswer(answer)
    } else {
      setCorrectAnswer(0)
      setClickAnswer(answer)
    }

  }

  const nextStep = () => {
    setStep(step + 1)
    setCorrectAnswer(0)
    setClickAnswer('')
  }



  return (
    <Container style={containerStyles}>
      <Card style={cardStyle}>
        <Card.Body>
          {step < questions.length ? (<><Card.Title>{questions[step].question}</Card.Title>
            <ListGroup>
              {questions[step].answers && questions[step].answers.map(answer => {
                console.log(answer)
                return (
                  <ListGroup.Item key={answer} action disabled={clickAnswer ? true : false} onClick={() => checkAnswer(answer)} className={correctAnswer === answer ? 'correct' : clickAnswer === answer ? 'incorrect' : ''}>{answer}</ListGroup.Item>
                )
              })}
            </ListGroup>
            <div className='footer-card'>
              {
                correctAnswer ? 'Resposta Correta!!' : clickAnswer ? 'Resposta Incorreta!!' : ''
              }
              <Button variant='success' className='next-button success' disabled={clickAnswer && questions.length >= step ? false : true} onClick={() => nextStep()}>
                Proximo
              </Button>
            </div>
          </>) : (
            <>
              <div className='final-page'>
                <h3>Você completou o questionario!!</h3>
                <h5>Obrigado</h5>
              </div>
            </>)}
        </Card.Body>
      </Card>
    </Container>
  )
}

export default IndexPage

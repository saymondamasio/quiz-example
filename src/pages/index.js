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
}


// markup
const IndexPage = () => {
  const [questions, setQuestions] = React.useState([{
    question: 'Pergunta 1?',
    answers: [
      { answer: 'Opção 1', redirectStep: 2 },
      { answer: 'Opção 2', redirectStep: 2 },
      { answer: 'Opção 3', redirectStep: 3 },
    ],
  },
  {
    question: 'Pergunta 2?',
    answers: [
      { answer: 'Opção 1', redirectStep: 1 },
      { answer: 'Opção 2', redirectStep: 3 },
      { answer: 'Opção 3', redirectStep: 4 },
    ],
  },
  {
    question: 'Pergunta 3?',
    answers: [
      { answer: 'Opção 1', redirectStep: 1 },
      { answer: 'Opção 2', redirectStep: 2 },
      { answer: 'Opção 3', redirectStep: 4 },
    ],
  },
  {
    question: 'Pergunta 4?',
    answers: [
      { answer: 'Opção 1', redirectStep: 2 },
      { answer: 'Opção 2', redirectStep: 3 },
      { answer: 'Opção 3', redirectStep: 5 },
    ],
  }])
  const [clickAnswer, setClickAnswer] = React.useState('')
  const [step, setStep] = React.useState(1)

  const nextStep = (clickAnswer) => {
    questions[step - 1].answers.forEach(answer => {
      if (answer.answer === clickAnswer.answer) {
        setStep(answer.redirectStep)
        setClickAnswer('')
      }
    })

  }



  return (
    <Container style={containerStyles}>
      <Card style={cardStyle}>
        <Card.Body>
          {step <= questions.length ? (<><Card.Title>{questions[step - 1].question}</Card.Title>
            <ListGroup style={{ marginTop: 30 }}>
              {questions[step - 1].answers && questions[step - 1].answers.map(answer => {
                return (
                  <ListGroup.Item key={answer.answer} action active={answer.answer === clickAnswer.answer} disabled={clickAnswer} onClick={() => setClickAnswer(answer)}>{answer.answer}</ListGroup.Item>
                )
              })}
            </ListGroup>
            <div className='footer-card' disabled={!clickAnswer}>
              <Button variant='success' className='next-button success' onClick={() => nextStep(clickAnswer)}>
                Proximo
              </Button>
            </div>
          </>) : (
            <>
              <div className='final-page'>
                <h3>Você completou o questionário!!</h3>
                <h5>Obrigado</h5>
              </div>
            </>)}
        </Card.Body>
      </Card>
    </Container>
  )
}

export default IndexPage

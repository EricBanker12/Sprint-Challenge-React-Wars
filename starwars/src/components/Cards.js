import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Person from './Person'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Cards(props) {
  return (
    <Container>
      <Row className="justify-content-center">
        {props.people.map(person => <Person person={person} key={person.url} />)}
      </Row>
    </Container>
  )
}
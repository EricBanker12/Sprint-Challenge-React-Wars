import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Person(props) {
  return (
    <Card className='col-xl-2 col-md-3 col-sm-5 m-2'>
      <CardBody className='text-left'>
        <CardTitle className='font-weight-bold'>{props.person.name}</CardTitle>
        <CardText>Birth Year: {props.person.birth_year}</CardText>
        <CardText>Gender: {props.person.gender}</CardText>
        <CardText>Height: {props.person.height} cm</CardText>
        <CardText>Mass: {props.person.mass} kg</CardText>
        <CardText>Hair Color: {props.person.hair_color}</CardText>
        <CardText>Eye Color: {props.person.eye_color}</CardText>
        <CardText>Skin Color: {props.person.skin_color}</CardText>
        <CardText className='text-muted'>Film Count: {props.person.films.length}</CardText>
      </CardBody>
    </Card>
  )
}
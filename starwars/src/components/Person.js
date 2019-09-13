import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Person(props) {
  return (
    <Card>
      <CardBody className="text-left">
        <CardTitle>{props.person.name}</CardTitle>
        {['Birth Year', 'Gender', 'Height', 'Mass', 'Hair Color', 'Eye Color', 'Skin Color'].map(key => {
            const formattedKey = key.toLowerCase().replace(/ /g, '_')
            return (
                <>
                    <CardText>{key}: {props.person[formattedKey]}</CardText>
                </>
            )
        })}
        <CardText>Film Count: {props.person.films.length}</CardText>
      </CardBody>
    </Card>
  )
}
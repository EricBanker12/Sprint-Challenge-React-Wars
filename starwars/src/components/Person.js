import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Person(props) {
  return (
    <Card className="col-xl-2 col-md-3 col-sm-5 m-2">
      <CardBody className="text-left">
        <CardTitle className="font-weight-bold">{props.person.name}</CardTitle>
        {['Birth Year', 'Gender', 'Height', 'Mass', 'Hair Color', 'Eye Color', 'Skin Color'].map((key, index) => {
            const formattedKey = key.toLowerCase().replace(/ /g, '_')
            return (
                <>
                    <CardText key={index}>{key}: {props.person[formattedKey]}</CardText>
                </>
            )
        })}
        <CardText className="text-muted">Film Count: {props.person.films.length}</CardText>
      </CardBody>
    </Card>
  )
}
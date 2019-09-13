import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './components/Cards'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [peopleState, setPeopleState] = useState({})
  const [urlState, setUrlState] = useState('https://swapi.co/api/people')

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(urlState)
      .then(response => {
        // console.log(response)
        setPeopleState(response.data)
      })
      .catch(error => {
        console.error(error)
      })

    // Example response.data
    // {
    //   count: 87
    //   next: 'https://swapi.co/api/people/?page=2'
    //   previous: null
    //   results: [{
    //     birth_year: '19BBY'
    //     created: '2014-12-09T13:50:51.644000Z'
    //     edited: '2014-12-20T21:17:56.891000Z'
    //     eye_color: 'blue'
    //     films: [
    //       'https://swapi.co/api/films/2/',
    //       'https://swapi.co/api/films/6/',
    //       'https://swapi.co/api/films/3/',
    //       'https://swapi.co/api/films/1/',
    //       'https://swapi.co/api/films/7/'
    //     ]
    //     gender: 'male'
    //     hair_color: 'blond'
    //     height: '172'
    //     homeworld: 'https://swapi.co/api/planets/1/'
    //     mass: '77'
    //     name: 'Luke Skywalker'
    //     skin_color: 'fair'
    //     species: [
    //       'https://swapi.co/api/species/1/'
    //     ]
    //     starships: [
    //       'https://swapi.co/api/starships/12/',
    //       'https://swapi.co/api/starships/22/'
    //     ]
    //     url: 'https://swapi.co/api/people/1/'
    //     vehicles: [
    //       'https://swapi.co/api/vehicles/14/',
    //       'https://swapi.co/api/vehicles/30/'
    //     ]
    //   }]
    // }

  },[urlState])

  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <Button className='ml-5' disabled={!peopleState.previous} onClick={() => {setUrlState(peopleState.previous)}}>Previous Page</Button>
      <Button className='ml-3' disabled={!peopleState.next} onClick={() => {setUrlState(peopleState.next)}}>Next Page</Button>
      <Cards people={peopleState.results || []} />
    </div>
  )
}

export default App

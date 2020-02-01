import React from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import PersonsPage from '../persons-page'
import PlanetsPage from '../planets-page'
import StarshipsPage from '../starships-page'
import ErrorIndicator from '../error-indicator'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Header />
      <RandomPlanet />
      <Switch>
        <Route exact path="/">
          <Redirect to="/people" />
        </Route>
        <Route path="/people">
          <PersonsPage />
        </Route>
        <Route path="/planets">
          <PlanetsPage />
        </Route>
        <Route path="/starships">
          <StarshipsPage />
        </Route>
        <Route path="*">
          <ErrorIndicator message="Page does not exist" />
        </Route>
      </Switch>
    </Router>
  )
}

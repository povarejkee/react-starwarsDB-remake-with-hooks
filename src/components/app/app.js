import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from '../header'
import RandomPlanet from '../random-planet'
import PersonsPage from '../persons-page'

import './app.css'
import PlanetsPage from '../planets-page'
import StarshipsPage from '../starships-page'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <RandomPlanet />
        <Switch>
          <Route exact path="/">
            <PersonsPage />
          </Route>
          <Route path="/planets">
            <PlanetsPage />
          </Route>
          <Route path="/starships">
            <StarshipsPage />
          </Route>
        </Switch>
      </Router>
    )
  }
}

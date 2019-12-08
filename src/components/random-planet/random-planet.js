import React, { Fragment, useState, useEffect } from "react"

import SwapiService from "../../services/swapi-service"

import "./random-planet.css"
import Loader from "../loader"
import ErrorIndicator from "../error-indicator"

export default function RandomPlanet() {
  const swapiService = new SwapiService()

  const [planet, setPlanet] = useState(null)
  const [isLoading, setLoadingStatus] = useState(true)
  const [error, setErrorStatus] = useState(false)

  useEffect(() => {
    updatePlanet() // первичная загрузка. Далее загрузка по интервалу
    const planetInterval = setInterval(updatePlanet, 5000)

    return () => clearInterval(planetInterval) // отписка от интервала
  }, [])

  const updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2

    swapiService.getPlanet(id)
        .then(planet => {
        setPlanet(planet)
        setLoadingStatus(false)
      })
        .catch(() => {
        setErrorStatus(true)
        setLoadingStatus(false)
      })
  }

    return (
      <div className="random-planet jumbotron rounded">
        {error && <ErrorIndicator />}
        {isLoading && <Loader />}
        {!error && !isLoading && <PlanetView planet={planet} getImageUrl={swapiService.getImageURL} />}
      </div>
    )
}

const PlanetView = ({ planet, getImageUrl }) => {
  const { id, name, population, rotationPeriod, diameter } = planet
  return (
    <Fragment>
      <img
        className="planet-image"
        src={getImageUrl('planets', id)}
        alt="planet image"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

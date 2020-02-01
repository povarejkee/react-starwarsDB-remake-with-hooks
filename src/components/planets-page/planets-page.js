import React, { useState } from 'react'
import SwapiService from '../../services/swapi-service'
import ItemList from '../item-list'
import ItemDetails from '../item-details'
import Row from '../row'

export default function PlanetsPage() {
  const swapiService = new SwapiService()
  const { getAllPlanets, getPlanet, getImageURL } = swapiService

  const [selectedPlanet, selectPlanet] = useState(null)

  const itemList = (
    <ItemList
      onItemSelected={selectPlanet}
      getItems={getAllPlanets}
      renderItem={i => `${i.name} (${i.population})`}
    />
  )

  const planetDetails = (
    <ItemDetails
      selectedItem={selectedPlanet}
      getItem={getPlanet}
      getImageURL={id => getImageURL('planets', id)}
      fields={[
        { name: 'population', label: 'Population' },
        { name: 'rotationPeriod', label: 'Rotation Period' },
      ]}
    />
  )

  return <Row leftPath={itemList} rightPath={planetDetails} />
}

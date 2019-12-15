import React, { useState } from "react"

import "./persons-page.css"

import ItemList from "../item-list"
import SwapiService from "../../services/swapi-service"
import Row from "../row"
import { ItemDetails } from "../item-details/item-details"

export default function PersonsPage() {
  const swapiService = new SwapiService()
  const { getAllPeople, getPerson, getImageURL } = swapiService

  const [selectedPerson, selectPerson] = useState(null)

  const itemList = (
    <ItemList
      onItemSelected={selectPerson}
      getItems={getAllPeople}
      renderItem={i => `${i.name} (${i.birthYear})`}
    />
  )

  const personDetails = (
    <ItemDetails
      selectedItem={selectedPerson}
      getItem={getPerson}
      getImageURL={id => getImageURL("characters", id)}
      fields={[
            { name: 'gender', label: 'Gender' },
            { name: 'birthYear', label: 'Birth Year' }
          ]}
    />
  )

  return <Row leftPath={itemList} rightPath={personDetails} />
}

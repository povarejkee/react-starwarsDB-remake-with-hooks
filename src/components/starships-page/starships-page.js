import React, { useState } from "react"

import ItemList from "../item-list"
import ItemDetails from "../item-details"
import SwapiService from "../../services/swapi-service"
import Row from "../row"

export default function StarshipsPage() {
  const swapiService = new SwapiService()
  const { getAllStarships, getStarship, getImageURL } = swapiService

  const [selectedStarship, selectStarship] = useState(null)

    const itemList = (
      <ItemList
        onItemSelected={selectStarship}
        getItems={getAllStarships}
        renderItem={i => `${i.name} (${i.model})`}
      />
    )

    const starshipDetails = (
      <ItemDetails
        selectedItem={selectedStarship}
        getItem={getStarship}
        getImageURL={id => getImageURL("starships", id)}
        fields={[
          {name: 'model', label: 'Model'},
          {name: 'length', label: 'Length'}
        ]}
      />
    )

    return <Row leftPath={itemList} rightPath={starshipDetails} />
}

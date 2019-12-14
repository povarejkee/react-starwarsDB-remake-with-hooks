import React, { Component } from "react";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";

export default class PlanetsPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPlanet: null
  };

  onPlanetSelected = id => {
    this.setState({ selectedPlanet: id });
  };

  render() {
    const { getAllPlanets, getPlanet, getImageURL } = this.swapiService;

    const itemList = (
      <ItemList
        onItemSelected={this.onPlanetSelected}
        getItems={getAllPlanets}
        renderItem={i => `${i.name} (${i.population})`}
      />
    );

    const planetDetails = (
      <ItemDetails
        selectedItem={this.state.selectedPlanet}
        getItem={getPlanet}
        getImageURL={id => getImageURL("planets", id)}
      >
{/*        <ListItem field="population" label="Population" />
        <ListItem field="rotationPeriod" label="Rotation Period" />*/}
      </ItemDetails>
    );

    return <Row leftPath={itemList} rightPath={planetDetails} />;
  }
}

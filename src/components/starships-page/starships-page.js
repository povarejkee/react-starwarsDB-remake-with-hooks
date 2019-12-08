import React, { Component } from "react";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import { ListItem } from "../item-details/item-details";

export default class StarshipsPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedStarship: null
  };

  onStarshipSelected = id => {
    this.setState({ selectedStarship: id });
  };

  render() {
    const { getAllStarships, getStarship, getImageURL } = this.swapiService;

    const itemList = (
      <ItemList
        onItemSelected={this.onStarshipSelected}
        getItems={getAllStarships}
        renderItem={i => `${i.name} (${i.model})`}
      />
    );

    const starshipDetails = (
      <ItemDetails
        selectedItem={this.state.selectedStarship}
        getItem={getStarship}
        getImageURL={id => getImageURL("starships", id)}
      >
        <ListItem field="model" label="Model" />
        <ListItem field="length" label="Length" />
      </ItemDetails>
    );

    return <Row leftPath={itemList} rightPath={starshipDetails} />;
  }
}

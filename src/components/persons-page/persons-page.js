import React, { Component } from "react";

import "./persons-page.css";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import { ListItem } from "../item-details/item-details";

export default class PersonsPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null
  };

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const { getAllPeople, getPerson, getImageURL } = this.swapiService;

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getItems={getAllPeople}
        renderItem={i => `${i.name} (${i.birthYear})`}
      />
    );

    const personDetails = (
      <ItemDetails
        selectedItem={this.state.selectedPerson}
        getItem={getPerson}
        getImageURL={id => getImageURL("characters", id)}
      >
        <ListItem field="gender" label="Gender" />
        <ListItem field="birthYear" label="Birth Year" />
      </ItemDetails>
    );

    return <Row leftPath={itemList} rightPath={personDetails} />;
  }
}

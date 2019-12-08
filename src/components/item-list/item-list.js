import React, { Component } from "react";

import "./item-list.css";
import Loader from "../loader";

export default class ItemList extends Component {
  state = {
    items: null,
    imgURL: null
  };

  componentDidMount() {
    this.props.getItems().then(items => {
      this.setState({ items });
    });
  }

  renderItems() {
    return this.state.items.map(item => {
      const { id } = item;
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {this.props.renderItem(item)}
        </li>
      );
    });
  }

  render() {
    const { items } = this.state;

    return (
      <ul className="item-list list-group">
        {!items ? <Loader /> : this.renderItems()}
      </ul>
    );
  }
}

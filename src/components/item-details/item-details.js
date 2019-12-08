import React, { Component, Fragment, Children, cloneElement } from "react";

import "./item-details.css";

import Loader from "../loader";

export default class ItemDetails extends Component {
  state = {
    item: null,
    isLoading: false,
    imageURL: null
  };

  componentDidUpdate(prevProps) {
    const { getItem, selectedItem, getImageURL } = this.props;

    if (prevProps.selectedItem !== selectedItem) {
      this.setState({ isLoading: true });

      getItem(selectedItem).then(item =>
        this.setState({
          item,
          isLoading: false,
          imageURL: getImageURL(selectedItem)
        })
      );
    }
  }

  render() {
    const { item, isLoading, imageURL } = this.state;

    return (
      <div className="person-details card">
        {!item && !isLoading && (
          <span>Please, select a person from a list</span>
        )}
        {item && !isLoading && (
          <ItemView
            item={item}
            children={this.props.children}
            images={imageURL}
          />
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}

const ItemView = ({ item, children, images }) => {
  return (
    <Fragment>
      <img className="person-image" src={images} />
      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {Children.map(children, child => {
            return cloneElement(child, { item });
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export const ListItem = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

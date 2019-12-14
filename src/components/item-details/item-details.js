import React, { Component, Fragment } from "react";

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
    const { fields } = this.props;

    return (
      <div className="person-details card">

        {!item && !isLoading && (
          <span>Please, select a person from a list</span>
        )}

        {item && !isLoading && (
            <Fragment>
                <img className="person-image" src={imageURL} />
                <div className="card-body">
                    <h4>{item.name}</h4>
                    <ul className="list-group list-group-flush">
                        {fields.map(field => {
                            return (
                                <li className="list-group-item" key={field.name}>
                                    <span className="term">{field.label}</span>
                                    <span>{item[field.name]}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Fragment>
        )}

        {isLoading && <Loader />}

      </div>
    );
  }
}

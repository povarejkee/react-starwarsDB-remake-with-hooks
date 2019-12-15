import React, { useState, useEffect, Fragment } from "react";

import "./item-details.css";

import Loader from "../loader";

export default function ItemDetails(props) {
  const { fields, selectedItem, getItem, getImageURL } = props

  const [item, setItem] = useState(null)
  const [imageURL, setImageURL] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    if (selectedItem) {
      setLoading(true)

      getItem(selectedItem).then(item => {
        setItem(item)
        setImageURL(getImageURL(selectedItem))
        setLoading(false)
      })

    }
  }, [selectedItem])

    return (
      <div className="person-details card">

        {!item && !isLoading && (
          <span>Please, select an item from a list</span>
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
    )
}

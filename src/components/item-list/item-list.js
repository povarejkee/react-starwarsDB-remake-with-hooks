import React, { useState, useEffect } from "react"

import "./item-list.css"
import Loader from "../loader"

export default function ItemList(props) {
  const { getItems, renderItem, onItemSelected } = props
  const [items, setItems] = useState(null)

  useEffect(() => {
    getItems().then(items => setItems(items))
  }, [])

  const renderItems = () => {
    return items.map(item => (
        <li
          className="list-group-item"
          key={item.id}
          onClick={() => onItemSelected(item.id)}
        >
          {renderItem(item)}
        </li>
      )
    )
  }

    return (
      <ul className="item-list list-group">
        {!items ? <Loader /> : renderItems()}
      </ul>
    )

}

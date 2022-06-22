import React from "react";
import './ItemCard.Module.css'
const ItemCard = (props) => {
  const { title, type, price, image, imageAlt } = props;

  return (
    <div className="card" >
      <img src={image} className="card-img-top pt-2 px-2 mx-auto" alt={imageAlt} />
      <div className="card-body">
        <p className="card-title">{title}</p>
        <p className="card-text">{type}</p>
        <p className="card-title">{price}</p>
      </div>
    </div>
  )
}

export default ItemCard;
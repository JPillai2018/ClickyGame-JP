import React from 'react';
import "./Card.css";
// This will render the card images. Styles are being imported. Each component has its own styles
const Card = props => (
	<div className="card imgContainer">

	      <img className="img" alt={props.name} src={props.image} id={props.id}
				  onClick={() => props.shuffleCard(props.id)} />

  </div>
);

export default Card;

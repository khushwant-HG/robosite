import React from 'react';
import './Card.css';
const Card=({id,name,email})=>{
return (
	<div className="dif">
	<img alt="Dp" src={`https://robohash.org/${id}`}/>
	<p>{ name } </p>
	<p>{ email } </p>
	<p>{ id}</p>
	</div>
);
	
}
export default Card;


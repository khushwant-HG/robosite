import React from 'react'
import Card from './Card'

const Cardlist=({ data })=>{

		if(true)
		{
			throw new Error("error");
		}
	return(
		<div>
		{
			data.map( (val, i) => {
					return (
					<Card id={data[i].id}
				 	name={data[i].name}
				  	email={data[i].email} />
				);
			}
			)
		}
	</div>
	);
}

export default Cardlist;

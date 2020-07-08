import React from 'react'
const Searchbox=({searchChange})=>
{
	return(
		<div>
		<input type="search" placeholder="searchbox" onChange={searchChange}/>
		</div>
		);
}
export default Searchbox;

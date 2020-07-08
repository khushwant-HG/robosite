import React,{ Component } from 'react';
/*import Card from './Card';
import { Data } from './Data';*/
import Cardlist from '../component/Cardlist';
import Searchbox from '../component/Searchbox';
import Scroll from '../component/scroll';
import ErrorBoundary from '../component/ErrorBoundary';
import './App.css';

class App extends Component{
	constructor(){
		super();
		this.state={
			Data:[],
			searchField:''
		}
	}
	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response)=>{return response.json();})
			.then((users)=>{
				this.setState({Data:users});
			})
	}
	onSearchChange=(event)=>{
		this.setState({ searchField:event.target.value });
		
		//console.log(event.target.value);
	}
	render()
	{
	const filterRobo=this.state.Data.filter((dat)=>{return dat.name.toLowerCase().includes(this.state.searchField.toLowerCase())})
		return(
			<div className="cen">
				<h1 >Robofriends</h1>
				<Searchbox searchChange={this.onSearchChange}/>
				<Scroll>
				<ErrorBoundary>
					<Cardlist data={filterRobo} />
				</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}
export default App;

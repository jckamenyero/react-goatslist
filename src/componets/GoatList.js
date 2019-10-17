import React, { Component } from 'react';
import Goat from './Goat';
import { goatData } from '../Data';

export default class GoatList extends Component {
	state = { lists: goatData, listing: [] };
	addList = sound => {
		//console.log(sound);

		//const { lists } = this.state;
		//const sortedLists = lists.filter(list => list.id !== id);
		this.setState({
			listing: [...this.state.listing, sound]
		});
		console.log(this.state.listing);
	};

	render() {
		//console.log(this.state.lists);
		const { lists, listing } = this.state;
		return (
			<>
				<h2>List of goats</h2>
				<section>
					{lists.map(list => {
						return <Goat key={list.id} list={list} addList={this.addList} />;
					})}
				</section>
				<h2>Selected sequence</h2>
				<section>
					{listing.map(sound => {
						return <span>{sound}</span>;
					})}
				</section>
			</>
		);
	}
}

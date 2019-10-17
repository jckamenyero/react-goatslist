import React, { Component } from 'react';

export default class Goat extends Component {
	render() {
		const { img, name, sound, descr } = this.props.list;
		const { addList } = this.props;
		return (
			<div
				className="goat"
				onClick={() => {
					addList(sound);
				}}
			>
				<img src={img} alt={name} />
				<h4>{name}</h4>
				<p>{sound}</p>
				<p>{descr}</p>
			</div>
		);
	}
}

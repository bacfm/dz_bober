import React, { Component } from 'react';
import Gif from '../gif';
import Message from '../textMessage';

export default class MessageWindow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			url: ""
		}
	}

	render() {
		return (
			<div></div>
			);
	}
}

		// if(this.props.type === "text"){
		// 	return (<Message title={this.props.title} />)
		// } else {
		// 	return (<Gif url={this.props.title}/>)
		// }
		

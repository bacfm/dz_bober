import React, { Component } from 'react';
import Gif from '../gif';
import Message from '../textMessage';

export default class MessageWindow extends Component {
	render() {
		return (
			<p>{this.props.title}</p>
			);
	} 
}

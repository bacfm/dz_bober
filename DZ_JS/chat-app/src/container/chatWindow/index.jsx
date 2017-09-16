import React, { Component } from "react";
import AddMessageForm from '../../components/Form';
import GifBar from '../../components/GifsBar';
import MessageWindow from '../../components/MessageWindow';


export default class ChatWindow extends Component{
	constructor(props) {
		super(props);
		this.state = {
			title: ""
		}
	}
	render() {
		const { title } = this.state.title;
		return (
			<div className="chatWindow">
			<MessageWindow
			title = {title}
			 />
			<GifBar />
			<AddMessageForm
			messContent = {title}
			 />
			</div>
			);
	}
}
import React, { Component } from "react";
import AddMessageForm from '../../components/Form';
import GifBar from '../../components/GifsBar';
import MessageWindow from '../../components/MessageWindow';


export default class ChatWindow extends Component{
	render() {
		return (
			<div className="chatWindow">
			<MessageWindow />
			<GifBar />
			<AddMessageForm />
			</div>
			);
	}
}
import React, { Component } from "react";

export default class AddMessageForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: ""
		}
		this.onChange = this.onChange.bind(this);
		this.clearForm = this.clearForm.bind(this);
	}

onChange(ev){
	this.setState({
		title: ev.target.value
	});
}

	clearForm(){
		this.setState({
			title: ""
		});
	}
	render() {
		const { title } = this.state;
		return (
			<form
			
			>
			<input 
			type="text"
			placeholder="Type your message"
			onChange={this.onChange}
			value = {title}
			/>
			<button>Send</button>
			</form>
			);
	}
}
import React, { Component } from "react";

export default class AddMessageForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.messContent
		}
		this.onChange = this.onChange.bind(this);
		this.clearForm = this.clearForm.bind(this);
	} 

onChange(ev){
	this.setState({
		messContent: ev.target.value
	});
}

	clearForm(){ 
		this.setState({
			messContent: ""
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
			onClick={(ev) => {
				ev.preventDefault();
				this.onChange;
				this.ClearForm;
			}
			}
			value = {title}
			/>
			<button>Send</button>
			</form>
			);
	}
}
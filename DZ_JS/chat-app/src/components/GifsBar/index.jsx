import React, { Component } from "react";

let idCounter = 0;
class GifBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = { srcs: [] };
  }
  componentDidMount() {
    fetch("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC").
      then(res => res.json()).
      then(res => this.setState({
        srcs: res.data.map(function(src){
        	let url = src.images.fixed_height_small.url;
        	return {
        		url: url,
        		id: idCounter++,
        		type: "gif"
        	};
        })
      }))
  }
  
  render() {
    const { srcs } = this.state;
    
    if(!srcs.length) return null;
    
    const Images = srcs.map(src => (<img src={src.url} key={src.id} />));
    
    return (<div className="gifBar">{Images}</div>);
  }
}

export default GifBar;
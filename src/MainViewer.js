import React, { Component } from 'react';
import './CSS/MainViewer.css';
class MainViewer extends Component {
	constructor(props)
	{
		super(props);
		this.state = {currentPerson: "hold"};
	}
	render() {
	return (
	  <div className = "MainViewerMainDiv">
	    <h1>{this.props.currentPerson}</h1>
	    <input />
	  </div>
	);
	}
}
export default MainViewer;

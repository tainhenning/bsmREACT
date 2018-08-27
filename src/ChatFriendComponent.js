import React, { Component } from 'react';
import "./CSS/ChatFriendComponent.css";
import MainViewer from './MainViewer';
class ChatFriendComponent extends Component {
	constructor(props)
	{
		super(props);
		this.state = {hover: false};
		this.toggleHover = this.toggleHover.bind(this);
	}
	toggleHover()
	{
    	this.setState({hover: !this.state.hover});
	}

	updateNameToParentParent = () => {
		this.props.onSelect(this.props.name);
	}

	render() {
		var linkStyle;
		if(this.state.hover)
			linkStyle = {backgroundColor: 'red'};
		else
			linkStyle = {backgroundColor: ''}
		return (
			<div style = {linkStyle} 
			onClick={this.updateNameToParentParent}
			onMouseEnter={this.toggleHover} 
			onMouseLeave={this.toggleHover} 
			className="ChatFriendComponentFriend">
				<span className="ChatFriendComponentPicture"/>
				<span className="ChatFriendComponentName">{this.props.name}</span>
			</div>
		);
	}
}
export default ChatFriendComponent;

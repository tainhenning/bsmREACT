import React, { Component } from 'react';
import './CSS/ChatList.css';
import ChatFriendComponent from './ChatFriendComponent';
class ChatList extends Component {

  constructor(props){
    super(props);
    this.state = {
      friends: [
      'Alex Smith', 
      'Arianna Carol', 
      'John Doe', 
      'Jane Doe',
      'Alex Smith', 
      'Arianna Carol', 
      'John Doe', 
      'Jane Doe',
      'Alex Smith', 
      'Arianna Carol', 
      'John Doe', 
      'Jane Doe',
      'Alex Smith', 
      'Arianna Carol', 
      'John Doe', 
      'Jane Doe',
      'Alex Smith', 
      'Arianna Carol', 
      'John Doe', 
      'Jane Doe',
      ],
    };
  }


  updateName = (newName) => {
    this.props.onSelect(newName);
  }

  render() {
    return (
      <div className = "ChatListMainDiv">
        <h1 className = "ChatListTitle">Chat</h1>
          <p>{
            this.state.friends.map(item => {
              return (<ChatFriendComponent
               onSelect={this.updateName} 
               name = {item} 
               />);
            })
          }</p>
      </div>
    );
  }
}
export default ChatList;

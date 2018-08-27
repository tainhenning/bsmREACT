import React, { Component } from 'react';
import ChatList from './ChatList';
import MainViewer from './MainViewer';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {currentName: 'sd'};
  }

  updateName = (newName) => {
    this.setState({currentName: newName});
  }

  ChatPersonCallback = (nameFromChild) => {}
  render() {
    return (
      <div>
        <div className = "ChatList">
          <ChatList onSelect={this.updateName} bean = 'bean' />
        </div>
        <div className = "MainViewer">
          <MainViewer currentPerson = {this.state.currentName} />
        </div>
      </div>
    );
  }
}
export default App;

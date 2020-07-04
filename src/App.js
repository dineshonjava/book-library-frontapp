import React, { Component } from 'react';
import './App.css';
import LibraryList from './component/LibraryList';

class App extends React.Component {
  
  render() {
		return (
      <div className="container" align="center">
      <h1>BL Application</h1>
				<div>
					<LibraryList/>
				</div>
      </div>
		)
	}
}

export default App;

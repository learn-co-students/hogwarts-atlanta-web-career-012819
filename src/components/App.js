import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCard from './HogCard'

class App extends Component {
  state = {
                hogs: hogs
              }
  
  render() {
    return (
      <div className="App">
          < Nav />
          <div className="ui container">
            {/* <Filters /> */}
            <div className="ui four column grid">
              {this.state.hogs.map((hog)=><div className="column"><HogCard hog={hog} /></div>)}
            </div>
          </div>  
      </div>
    )
  }
}

export default App;

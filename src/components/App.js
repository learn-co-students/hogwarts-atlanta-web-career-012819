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
          <div className="indexWrapper">
            {/* <Filters /> */}
            <ul>
              {this.state.hogs.map((hog)=><li><HogCard hog={hog} /></li>)}
            </ul>
          </div>  
      </div>
    )
  }
}

export default App;

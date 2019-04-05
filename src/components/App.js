import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCard from './HogCard'
import Filter from './Filter'

class App extends Component {
  state = {
                hogs: hogs,
                sort_by: "none"
              }
  
  handleSort = (e) => {
    const sortMethod = e.target.value
    if(sortMethod === "name")
      this.setState((state)=>{
        return {hogs: this.sortByName(state.hogs)}
      })
    else if (sortMethod === "weight")
      this.setState((state)=>{
        return {hogs: this.sortByWeight(state.hogs)}
      })
    else
      this.setState({hogs:hogs})

  }
  sortByName(arrayToSort){
    let newArray = arrayToSort.slice()
    return newArray.sort((ele1, ele2)=>{
      if(ele1.name < ele2.name)
        return -1
      else if (ele1.name > ele2.name)
        return 1
      else
        return 0
    })
  }

  sortByWeight(arrayToSort){
    let newArray = arrayToSort.slice()
    return newArray.sort((ele1, ele2)=>{
      if(ele1.weight < ele2.weight)
        return -1
      else if (ele1.weight > ele2.weight)
        return 1
      else
        return 0
    })
  }
  render() {
    return (
      <div className="App">
          < Nav />
          <div className="ui container">
              
            <div className="ui two column grid">
              <Filter sortAction={this.handleSort}/>
            </div>
            <div className="ui four column grid">
              {this.state.hogs.map((hog)=><div className="column"><HogCard hog={hog} /></div>)}
            </div>
          </div>  
      </div>
    )
  }
}

export default App;

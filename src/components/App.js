import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCard from './HogCard'
import Filter from './Filter'

class App extends Component {
  state = {
                hogs: hogs,
                showGreased: true
              }
  
  handleSort = (e) => {
    const sortMethod = e.target.value
    if(sortMethod === "name")
      this.setState({
        hogs: this.sortByName(this.state.hogs)
      })
    else if (sortMethod === "weight")
      this.setState({
        hogs: this.sortByWeight(this.state.hogs)
      })
    else
      this.setState({hogs:hogs})

  }

  handleShowGreased = (e) =>{
    console.log('e.target.value', e.target.value)
    this.setState({showGreased: !this.state.showGreased})
  }
  // filterGreased(arrayToFilter){
  //   let newArray = arrayToFilter.slice()

  // }
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
              <Filter sortAction={this.handleSort} greasedAction={this.handleShowGreased}/>
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

import React, { Component } from 'react'
import HogDetails from './HogDetails';

export default class HogCard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         clicked: false,
         hidden: false
      }
    }
    
    requireImage = (path)=>{
        let img =  require(`../hog-imgs/${path}`)
        return img
    }
  render() {
      const {name} = this.props.hog
      const hogImg = this.requireImage(this.props.hog.img)
    return (
        <div className="column">
            <div className="ui card">
                <div className="image">
                    <img src={hogImg} alt="hog" />
                </div>
                <div className="content">
                    <h3 className="header">{name}</h3>
                    {this.state.clicked ? <HogDetails hog={this.props.hog} /> : ""}
                    <button className="ui tiny button" onClick={()=>this.setState({clicked: !this.state.clicked})} >View Details</button>
                    <button className="ui tiny button">Hide This</button>
                </div>
            </div>
        </div>
      )
  }
}


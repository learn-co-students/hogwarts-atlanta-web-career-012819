import React, { Component } from 'react';
import HogCard from './HogCard';


class HogList extends Component {
    
    renderHogs = () => {
        return this.props.hogs.map((hog, i) => {
            return <HogCard key={hog.id} hog={hog} renderDetails={this.props.renderDetails} pics={this.props.pics[i]}/>
        })
    }
    
    
    render() {
        console.log(this.props.pics[0])
        return (
            <div className="ui gird container">
                {this.renderHogs()}
            </div>
        )
    }
}

export default HogList;
import React, { Component } from 'react';
import HogCard from './HogCard';

class HogList extends Component {


    renderHogs = () => {
        return this.props.hogs.map((hog) => {
            return <HogCard key={hog.id} hog={hog} renderDetails={this.props.renderDetails}/>
        })
    }


    render() {
        return (
            <div className="ui gird container">
                {this.renderHogs()}
            </div>
        )
    }
}

export default HogList;

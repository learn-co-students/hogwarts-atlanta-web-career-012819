import React, { Component } from 'react';
import HogCard from './HogCard';


class HogList extends Component {
    
    renderHogs = () => {
        return this.props.hogs.map((hog, i) => {
            if (!hog.hidden) {
                return <HogCard key={hog.id} hog={hog} renderDetails={this.props.renderDetails} hideHog={this.props.hideHog}/>
            } else if (hog.hidden) {
                return null
            }
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
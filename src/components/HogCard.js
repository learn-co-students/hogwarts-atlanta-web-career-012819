import React from 'react';
import HogDetails from './HogDetails'

class HogCard extends React.Component {

    state = {
        showDetails: false
    }

    getImage = () => {
        let formattedName = this.props.hog.name.split(" ").join("_").toLowerCase();
        let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
        return pigPics;
    };

    handleClick = () => {
        this.setState({ showDetails: !this.state.showDetails })
    }

        render() {
            return (
                <div className="ui eight wide column">
                    <h2>{this.props.hog.name}</h2>
                    <img alt="pic" src={this.getImage()} />
                    <button onClick={this.handleClick}>See Details</button>
                    {this.state.showDetails ? <HogDetails hog={this.props.hog} /> : null}
                </div>
        )
    }
}

export default HogCard;

// name: 'Mudblood',
//     specialty: 'Mediocre magic',
//     greased: false,
//     'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
//     'highest medal achieved': 'bronze'

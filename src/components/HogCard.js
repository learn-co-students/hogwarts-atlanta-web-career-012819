import React from 'react';
import HogDetails from './HogDetails'

class HogCard extends React.Component {

    state = {
        showHog: true,
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

    handleClickHide = () => {
        this.setState({ showHog: !this.state.showHog })
    }

        render() {
            return (
                <div>
                    <div className="card ui eight wide column">
                        <h2>{this.props.hog.name}</h2>
                        <img className="card-hog-pic" alt="pic" src={this.getImage()} />
                        <button onClick={this.handleClick}>See Details</button>
                        <button onClick={this.handleClickHide}>Hide Hog</button>
                        {this.state.showDetails ? <HogDetails hog={this.props.hog} /> : null}
                    </div>
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

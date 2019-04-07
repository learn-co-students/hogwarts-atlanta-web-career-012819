import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class HogDetails extends Component {

    handleHide = (props) => {
        console.log("You hid ", this.props.hog.name)
        this.props.hideHog(this.props.hog)
    }

    render() {
        console.log(this.props.hog)
        const weight = this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        const medal = this.props.hog['highest medal achieved']
        return (
            <div className="container">
                <p>{this.props.hog.specialty}</p>
                <p>Weight Ratio: {weight}</p>
                <p>{this.props.hog.greased ? "Hog is greased!" : "Hog is not greased!"}</p>
                <p>Highest Medal Achieved: {medal}</p>
                <Button onClick={this.handleHide}>Hide Hog</Button>
            </div>
        )
    }
}

export default HogDetails;
// 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
//     'highest medal achieved': 'bronze'